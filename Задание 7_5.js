/*Реализовать следующее консольное приложение подобно примеру, который разбирался
в видео. Реализуйте его на прототипах.Определить иерархию электроприборов.
Включить некоторые в розетку. Посчитать потребляемую мощность.Таких приборов
должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.

Переписать консольное приложение из предыдущего юнита на классы.*/

class HomeAppliances {
    constructor(name, price, energi) {
      this.name = name;
      this.price = price;
      this.energi = energi;
    }
    
    specification() {
      console.log(`${this.name} cost ${this.price} ruble, consumes ${this.energi} watts`);
    }
  }
    
    class Tv extends HomeAppliances {
      constructor(name, price, energi, diagonal){
        super(name);
        super(price);
        super(energi);
        this.diagonal = diagonal;
      }
      specification () {
      console.log(`TV ${this.name} diagonal ${this.diagonal} inch costs ${this.price} ruble`);
    }
    }
    
    class Hoover extends HomeAppliances {
      constructor(name, price, energi, suctionpower){
        super(name);
        super(price);
        super(energi);
        this.suctionpower = suctionpower;
      }
      specification () {
      console.log(`Hoover ${this.name} consumes ${this.energi} watts costs ${this.price} ruble`);
    }
    }
     
  
    class Washer extends HomeAppliances {
      constructor(name, price, energi, loading){
        super(name);
        super(price);
        super(energi);
        this.loading = loading;
      }
      specification () {
      console.log(`Washing machine ${this.name} with a load of ${this.loading} kg costs ${this.price} ruble`);
    }
    }

    const tv = new Tv ('Samsung', 92000, 300, 50);
    tv.specification ()

    const hoover = new Hoover ('Thomas', 60000, 2500, 230);
    hoover.specification ()
    
    const washer = new Washer ('Bosch', 85000, 3000, 7);
    washer.specification ()  