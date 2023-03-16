function f(a) {
    console.log(a)
}

function throttle(f, ms) {
    let isCooldown = false;
    let prevThis;
    let prevArgs;

    return function() {
        if (isCooldown) {
            prevThis = this;
            prevArgs = arguments;
            return;
        }


        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => {
            isCooldown = false;
            f.apply(prevThis, prevArgs);
        }, ms);
    };
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
f1000(4);