let aModule = require('./a.js');

// 暴露方式一和二都需要通过aModule来调用暴露的变量和函数
// console.log(aModule.str);
// aModule.fn(10, 20);

// 暴露方式三，全局变量就不需要通过amodule调用暴露的变量和方法
console.log(str);
let res = fn(20, 30);
console.log(res);