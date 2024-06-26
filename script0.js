﻿/*
Задача 1
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
найти минимальное число в массиве, решение задание должно состоять из одной строки
*/
const arr = [1, 5, 7, 9];
//const minNum = Math.min(...arr);
console.log(Math.min(...arr));



/*
Задача 2
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

function createCounter() {
  let count = 0;
  
  const obj = {
      increment: () => {
          count++;
          return count;
      },
      decrement: () => {
          count--;
          return count;
      }  
  }
  return obj;  
}

const newObj = createCounter();
console.log(newObj.increment()); // Увеличивает счетчик на 1
console.log(newObj.increment()); // Увеличивает счетчик еще на 1
console.log(newObj.decrement()); // Уменьшает счетчик на 1



/*
Задача 3
Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/


function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }

  for (let child of rootElement.children) {
    const foundElement = findElementByClass(child, className);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
};

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);