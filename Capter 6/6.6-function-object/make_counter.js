function makeCounter() {
    let count = 0;
    function counter() {
        return count;
    };
    counter.set = (value)=> count = value;
    counter.decrease = ()=> count--;

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

//counter.count = 10;
counter.set(22)
counter.decrease()
//console.log( counter() ); // 10
console.log(counter())