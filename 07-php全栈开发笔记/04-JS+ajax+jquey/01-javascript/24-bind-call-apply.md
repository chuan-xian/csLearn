# 默认`this`指向

1. 函数(方法)或者对象中的`this`默认指向该方法的全局对象(window)，或普通对象(调用该方法的当前对象)。

2. `bind`、`call`、`apply`可以将函数或对象的`this`从默认指向改为手动指向特定的对象。

# `bind`
1. 将原函数中的 `this` 指向新对象，然后返回这个新函数，对原函数不影响。 
2. 如果原函数可以传参，那么 `bind` 绑定新函数后也可以传参。
```javascript
let obj = {
    name: 'zhangsan',
}
function test(a, b) {
    console.log(a, b);
    console.log(this);
}
test(10, 20);  // 默认this为调用test()的全局对象window
// 将this的默认指向改为obj对象，返回接收后的新函数
let fn = test.bind(obj, 30, 40);
fn();  //  修改后的函数this指向obj
test(11, 22);  // 原函数仍然指向window
```

# `call`

1. 和 `call` 功能类似，修改默认的 `this` 指向新对象，然后立即调用新函数，对原函数不影响。
2. 和 `call` 类似，也可以传参。
```javascript
let obj = {
    name: 'lisi',
}
function test(a, b) {
    console.log(a, b);
    console.log(this);
}
test(10, 20);
// 和 call 功能类似，只是不返回新函数，而是直接调用该新函数
test.call(obj, 30, 40);
test(11, 22);
```

# `apply`
1. 和 `call` 类似，也是把默认的 `this` 指向新的对象，并调用新函数。也不影响原函数。
2. 传递参数时，必须要用数组形式。
```javascript
let obj = {
    name: 'wangwu',
}
function test(a, b) {
    console.log(a, b);
    console.log(this);
}
test(10, 20);
test.apply(obj, [30, 40]);
test();
```