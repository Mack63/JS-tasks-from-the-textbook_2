"use strict";

function sum(number) {
    return function (number1) {
        return number + number1;
    }
}

console.log(sum(1)(2)); // = 3
console.log(sum(5)(-1)); // = 4