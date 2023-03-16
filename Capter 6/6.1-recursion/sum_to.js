function sumTo(n) {
    // let sum = n - 1;
    // if(sum > 0){
    //     return sumTo(sum) + n;
    // }else {
    //     return 1;
    // }
    // ------------------------------------
    // let sum = 0;
    // for (let i = n; i > 0; i--) {
    //     sum += i;
    // }
    // return sum;

    return (1 + n) / 2 * n;
}

console.log( sumTo(100) ); // 5050