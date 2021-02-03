/*Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.*/

const objHuman = {
    name: "Ivan",
    age: 25,
    city: "Minsk",
    university: "BSU"
  };
  
  objHuman.hobby = "football";
  
  const str = "agge";
  
  function getProp (obj, string) {
    console.log(string in obj);
  }
  
  getProp (objHuman, str)
  