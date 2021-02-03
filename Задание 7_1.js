/*Написать, функцию, которая принимает в качестве аргумента объект и выводит
в консоль все ключи и значения только собственных свойств. Данная функция
не должна возвращать значение.*/

const objHuman = {
    name:"Ivan",
    age:25,
    city:"Minsk",
    university:"BSU"
  }
  //console.log(objHuman);
  
  function customProp(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop);
      }
    }
  }
  
  console.log(customProp(objHuman));
  
  /*Если можно ответьте на вопрос. "undefined" в консоли должен быть, если нет,
  то как его убрать?*/