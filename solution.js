//Ваша задача - создать функцию, которая может принимать любое неотрицательное целое число 
//в качестве аргумента и возвращать его с цифрами в порядке убывания.
// По сути, переставьте цифры, чтобы создать максимально возможное число.
let numbers = [4,5,9,6,1,2];
numbers.sort (function (a , b){
    return a - b;
});
numbers = numbers.reverse();
console.log(numbers);