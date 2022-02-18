//Ваша задача - создать функцию, которая может принимать любое неотрицательное целое число 
//в качестве аргумента и возвращать его с цифрами в порядке убывания.
// По сути, переставьте цифры, чтобы создать максимально возможное число.
'use strict';
function maxValue(numbers){
  numbers = String(numbers);
  numbers = numbers.split('').sort().reverse().join('');
  numbers = Number(numbers);

   console.log(typeof(numbers));
  }

maxValue(4567);



// Создать функцию, которая будет принимать строку,
// а возвращать ее в зеркальном виде.

function reverseStr(text) {
  text = text.split('').reverse().join('');
  console.log(text);
}
reverseStr('hello');