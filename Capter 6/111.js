let obj = {
    0: "Hello",
    1: "world!",
    length: 4,
};

obj.join = Array.prototype.join;

console.log( obj.join(',') ); // Hello,world!