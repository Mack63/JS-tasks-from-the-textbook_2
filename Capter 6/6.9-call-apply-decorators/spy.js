function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}

function spy(func) {
    wrap.calls = [];
     function wrap(...arguments) {
        let key = [].join.call(arguments)
         wrap.calls.push(key);
         return func.apply(this, arguments);
    }
    return wrap;
}


work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(4, 59); // 9

for (let args of work.calls) {
    console.log( 'call:' + args ); // "call:1,2", "call:4,5"
}