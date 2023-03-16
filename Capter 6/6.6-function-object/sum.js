
function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log(sum(8).toString())
console.log(sum(1)(2).toString()) //== 3; // 1 + 2
console.log(sum(1)(2)(3).toString()) //== 6; // 1 + 2 + 3
console.log(sum(5)(-1)(2).toString()) //== 6
console.log(sum(6)(-1)(-2)(-3).toString()) //== 0
console.log(sum(0)(1)(2)(3)(4)(5).toString()) //== 15