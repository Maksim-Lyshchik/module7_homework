/*Реализовать следующее консольное приложение подобно примеру, который разбирался
в видео. Реализуйте его на прототипах.Определить иерархию электроприборов.
Включить некоторые в розетку. Посчитать потребляемую мощность.Таких приборов
должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.
План:
Определить родительскую функцию с методами, которые включают/выключают прибор
из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы,
отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)*/

function HomeAppliances(name, price, energi) {
  this.name = name,
  this.price = price,
  this.energi = energi
}

//Нужно ли в методе повторять аргументы из объекта или можно  оставить скобки пустыми?
HomeAppliances.prototype.specification = function (name, price, energi) {
  console.log(`${name} cost ${price} ruble, consumes ${energi} watts`);
}

TV.prototype = new HomeAppliances();
Hoover.prototype = new HomeAppliances();
Washer.prototype = new HomeAppliances();

const tv = new TV ('Samsung', 92000, 300, 50);
const hoover = new Hoover ('Thomas', 60000, 2500, 230);
const washer = new Washer ('Bosch', 85000, 3000, 7);

function TV(diagonal) {
  this.diagonal = diagonal;
}

TV.prototype.specification = function (name, price, energi, diagonal) {
  console.log(`TV ${name} diagonal ${diagonal} inch costs ${price} ruble`);
}

function Hoover(name, price, energi, suctionpower) {
  this.suctionpower = suctionpower;
}

Hoover.prototype.specification = function (name, price, energi, suctionpower) {
  console.log(`Hoover ${name} consumes ${energi} watts costs ${price} ruble`);
}

function Washer(loading) {
  this.loading = loading;
}

Washer.prototype.specification = function (name, price, energi, loading) {
  console.log(`Washing machine ${name} with a load of ${loading} kg costs ${price} ruble`);
}

console.log(washer.specification('Bosch', 85000, 3000, 7));
console.log(hoover.specification('Thomas', 60000, 2500, 230));
console.log(tv.specification('Samsung', 92000, 300, 50));

/*опять undefined в консоли появляется. Подскажите почему?
Хотел ещё сделать чтобы объект HomeAppliances собирал сумму энергии и стоимости
всех приборов, но не разобрался как обратиться к дочерним объектам.
Если это возможно, подскажите, пожалуйста*/