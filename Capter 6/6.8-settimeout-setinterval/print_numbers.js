function printNumbersSI(from, to) {
    let times = from;
    let timerId = setInterval(() => {
        if (times <= to){
            console.log(times)
            times++
        }else {
            clearInterval(timerId);
        }
    }, 1000);
}
function printNumbersST(from, to) {
    let times = from;
    setTimeout(function tick() {
        if (times <= to){
            console.log(times)
            setTimeout(tick, 1000); // (*)
        }
        times++
    }, 1000);
}


printNumbersST(3, 10)