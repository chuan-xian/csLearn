# 函数与方法中的`this`

1. 函数中的`this`

```javascript
function demo() {
    console.log(this);
}
// window.demo();
demo();
```

2. 方法中的`this`

```javascript
let obj = {
    name: 'nicola',
    say: function () {
        console.log(this);
    }
}
obj.say();
```

3. 无论谁调用了当前的函数或方法，那么当前的`this`就是谁。上面例子中:
    - 第一个`this`表示调用该函数的对象，这里省略了默认的全局`window`对象，所以该`this`指的就是`window`。
    - 第二个`this`指的就是`obj`对象。
    
