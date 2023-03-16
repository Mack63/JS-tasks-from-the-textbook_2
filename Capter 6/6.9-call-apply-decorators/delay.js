"use strict";

function delay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}

let f1000 = delay(console.log, 2000);
let f1500 = delay(console.log, 1000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test2"); // показывает "test" после 1500 мс