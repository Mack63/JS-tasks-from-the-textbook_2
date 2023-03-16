"use strict";



let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (value) {
        return value > a && value <= b;
    }
}
function inArray(numbers) {
    return function (value) {
        for (let elem of numbers) {
            if (elem == value){
                return true;
            }
        }
        return  false;
    }

}

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2