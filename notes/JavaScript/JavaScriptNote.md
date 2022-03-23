# 一、基础

## 嵌入js代码的位置问题

1. 在html中嵌入js代码的时候，存在一个问题，那就是因为js是解释型语言，执行的时候是从上往下执行代码的。如果把js代码嵌入在body开始标签之前，那么在js代码中往往需要操作DOM，而此时body中的DOM却没有加载渲染出来，将导致程序无法执行。

2. 解决办法，可以把JS代码在body结束标签前引入，或者把所有的js代码写在`window.onload = function(){// js代码};`这个函数会在全部DOM加载完后再执行。

3. 常见的输出函数：
    - 弹框输出：`alert('弹框提示信息)`、`prompt('提示信息')`、`conform（'提示信息'）`
    - html页面输出：`document.write()`
    - 控制端输出：`console.log()`、`console.warn()`、`console.error()`

# 二、类型转换

1. 转换为字符串
    - `var.toString()`：转为字符串类型，var必须为变量，且只能是number、boolean类型。转换的是var变量的副本，原变量不变。
    - `String(var)`：将var转换为字符串，var可以是常量、变量，类型可以是number、boolean、null、undefined。
    - `常量/变量 + ""`：通过常量/变量 + 一个空字符串就可以将其转换为字符串。

2. 转为数值型
    - `Number(var)`:var可以是常量/变量，类型可以是string、boolean、null、undefined。
        - 如果字符串中没有数值(空字符串、仅有空格的字符串)，那么转换结果为0。
        - 如果字符串中的数据不仅仅是数值，那么转换结果就是NaN。
        - null转换为0，undefined转换为NaN。
        - 总结：空字符串、空格字符串、null、false转换为0；字符串中不仅仅是数值、undefined转换为NaN；其它正常转换。
    - 通过算术运算符 `+/-` 本质上也是调用`Number()`方法。
    - `parseInt(var)`、`parseFloat(var)`：可以把var的整数或者小数部分提取出来，一旦遇到非数值类型就停止转换并返回结果，如果停止转换时还没有提取到数值，那么返回NaN。
    - `parseInt(var)`、`parseFloat(var)`：这两个函数会把var当作字符串处理，所以传入true、bool类型时，转换结果为NaN。

3. 转换为Boolean类型
    - `Boolean(var)`：var如果是0、空字符串、NaN、null、undefined转为false。

# 运算符

## 逻辑运算符

1. `A && B`：
    - 如果A成立，则不论B是否成立都返回B的结果。
    - 如果A不成立，直接返回A的结果。

2. `A || B`：
    - 如果A成立，则返回A的结果。
    - 如果A不成立，则不论B是否成立都返回B的结果。

3. `&&`和`||`都存在逻辑短路问题。

## 逗号运算符

1. 逗号运算符的结果为最后一个表达式的结果：
    - `let res = ((1+5), (2+12), (3+5));`，返回结果为8。

## switch运算

1. switch()中判断的是===全等于，可以是常量、变量、表达式。case后面可以是常量、变量、表达式。

## 作用域范围

1. 通过var定义的局部变量，和全局变量一样，后续都可以被使用。通过let定义的全局变量，那么这个变量只能在当前定义的{}中使用。

2. let定义变量的时候，如果是在循环中，要注意条件判断是在循环体外的。要当心在循环体中用let定义了变量，但是却要在循环体外的条件判断中使用该变量，会报错。

# 数组

1. 数组注意事项
    - 数组对应的索引中没有存储值，则默认存储undefined。
    - 访问不存在的索引(下标越界)不会报错，会返回undefined。
    - 存储空间不够时，自动扩容。
    - 数组可以存储不同类型的数据。
    - js中数组分配的存储空间不一定是连续的。浏览器厂商进行了一定的优化，如果存储的是相同的数据类型，那么会尽量分配连续的存储空间，如果存储的是不同类型的数据，那么就不会分配连续的存储空间。

2. 创建数组
    - `let arr = new Array();`：创建一个空数组
    - `let arr = new Array(size);`：创建长度为size个数的数组。
    - `let arr = new Array(data1, data2, data3...);`：创建一个数组并初始化
    - `let arr = [];`：创建一个空数组
    - `let arr = [data1, data2,...];`：创建一个数组并初始化


# JavaScript函数

## 什么是函数？
1. 函数是专门用来封装代码的，函数是一段可以随时被反复执行的代码块

2. 语法格式
    ```
        function funcName( 形参列表 ) {
            // 被封装的代码
        }
    ```

3. 函数的参数
    - 可以提供默认参数，如果不提供实参，就使用默认值
        ```
            function add(num1 = 10, num2 = 20) {
                return num1 + num2;
            }
        ```
    - 实参和形参的个数可以不一致，实参多余形参，则多余的实参被舍弃，形参多余实参，则多余的形参被赋值为undefined；

4. 函数的返回值
    - 没有用`return`返回返回值的，默认返回`undefined`；

5. 函数的本质
    - JavaScript中的函数和数组一样，都是引用数据类型(对象类型)。既然是一种数据类型，那就可以保存到一个变量中
        ```
            let func = function () {
                console.log("函数也是对象类型");
            };  // 这是赋值语句，要添加分号
            func();  //输出：函数也是对象类型
        ```
6. arguments参数
    - 每个函数内部都保存了一个arguments参数，用于保存所有传递给函数的实参。
    - arguments是一个伪数组，具有`.length`属性，可以使用数组下标，但没有`push`、`pop`等方法；

7. 函数扩展运算符
    - 扩展运算符在传递实参进行赋值时，就是将数组解组展开在当前位置。在型参数接收数据时，表示将所有的数据接收为一个数组。
    - 在形参处用扩展运算符接收实参时，因为它会从当前实参开始，接收后续的全部实参，所以扩展运算符只能写在最后。

8. 匿名函数

    - 有名函数
        ```
            // 有名函数一
            function say() {
                return 'hello world';
            }
            // 有名函数二
            let say = function () {
                return 'world hello';
            };
            say();
        ```

    - 匿名函数：不能够只定义不使用
        ```
            (function () {
                console.log(''hello world);
            })()
        ```
    - 匿名函数引用场景
        - 作为其它函数的参数
            ```
                function test(fn){
                    fn()
                }
                test(function(){
                    console.log('hello world');
                });
            ```
        - 作为其它函数的返回值
            ```
                // 在JS中函数可以嵌套定义
                function test() {
                    let say = function(){
                        console.log('hello world');
                    }
                    return say;
                }
                let fn = test();
                fn();
            ```
        - 作为一个立即执行的函数(立即执行函数可以是有名函数，也可是匿名函数)
            ```
                (function(){
                    console.log('hello world');
                })();
            ```
9. 箭头函数
    - 箭头函数是ES6的语法
    ```
        // 1.通用格式
        let funcName = () => {
            // 自定义函数体
        }

        // 2. 如果箭头函数的参数只有一个，可以省略圆括号()，如果箭头函数的函数体只有一句，可以省略花括号{}
        let realName = 'zhangsan';
        let say = nameArg => console.log(nameArg);
        say(realName);
    ```



