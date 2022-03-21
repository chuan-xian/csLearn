# node笔记

# 一、概述
1. 什么是Node.js
- nodejs是一个基于“chrome V8”引擎的JavaScript运行环境

2. 什么是v8引擎
- v8引擎是一款专门解释和执行js代码的虚拟机，任何程序只要集成了v8引擎都可以执行js代码
    例如
    - 将v8引擎集成到浏览器中，那么我们的js代码就会被浏览器执行
    - 将v8引擎嵌入到NodeJS中，那么我们写的js代码就会被NodeJS所执行
    
3. 由于NodeJS中也集成了V8环境，所以浏览器可以解释执行JS代码
    - 可以直接在命令行工具中编写执行js代码(REPL -- Read Eval Print Loop:交互式解释器)
    - 可以在命令行工具中执行js代码文件中的js代码

4. webstorm中配置node(视频004NodeJS执行JS代码)

5. NodeJS环境和浏览器环境区别
    - NodeJS环境和浏览器环境一样都是一个JS的运行环境，都可以执行JS代码，但是由于宿主不同所以特点也有所不同
    1. 内置对象不同
        - 浏览器环境中提供了window全局对象
        - NodeJS环境中的全局变量不叫window，叫global

    2. this默认指向不同
        - 浏览器环境中全局this默认指向window
        - NodeJS环境中全局this默认指向空对象{}
    
    3. API不同
        - 浏览器提供了操作节点的DOM相关API和操作浏览器的BOM相关的API
        NodeJS环境中没有HTML节点也没有浏览器，所以NodeJS环境中没有DOM/BOM

6. 全局属性和方法
    - __dirname:所在文件的路径(不包含该文件名)
    - __filename:所在文件的绝对路径(包括该文件名)

    ```
        setTimeout(function(){
            // 1s后输出123
            console.log(123);
        }, 1000)
    ```
    ```
        setInterval(function(){
            // 每隔1s输出一次123
            console.log(123);
        }, 1000)
    ```
    - consloe：输出内容

# 二、模块化开发
## 导出导入
1. 什么是模块？
    - 在浏览器开发中为了避免命名冲突，方便维护等，我们采用类或者立即执行函数的方式来封装JS代码，来避免命名冲突和提升代码的可维护性。其实这里的一个类或者一个立即执行函数就是浏览器开发中的一个模块。
    ```
        let obj = {
            // 模块中的业务逻辑代码
        };
    ```
    ```
        (function(){
            // 模块中的业务逻辑代码
        })()
    ```
    - 存在问题：没有标准或规范，不能统一所有开发全部用类或者立即执行函数

2. NodeJS中的模块
    - NodeJS采用CommonJS规范实现了模块系统；
    - CommonJS规范规定了如何定义一个模块，如何暴露(导出)模块中的变量函数，以及如何使用定义好的模块
    - 在CommonJS中，一个文件就是一个模块
    - 在CommonJS中，每个文件中的变量、函数都是私有的， 对其他文件不可见
    - 在CommonJS中，每个文件中的变量、函数必须通过exports暴露(导出)之后，其他文件导入才可以使用
    - 在CommonJS中，想要使用其它文件暴露的变量、函数，必须通过require()导入模块才可以使用
    ``` CommonsJS(要导出的模块a.js)
        let name = 'zhangsan';
        function add(a, b) {
            console.log(a + b);
        }
        // 暴露方式一
        // exports.str = name;
        // exports.fn = add;

        // 暴露方式二
        // module.exports.str = name;
        // module.exports.fn = add;

        // 暴露方式三
        global.str = name;
        global.fn = add;
    ```
    ``` 导入前面的模块到本模块中
        let aModule = require('./a.js');
        
        // 暴露方式一和二都需要通过aModule来调用暴露的变量和函数
        // console.log(aModule.str);  // 输出'zhangsan'
        // aModule.fn(10, 20);  // 30

        // 暴露方式三，全局变量就不需要通过amodule调用暴露的变量和方法
        console.log(str);
        let res = fn(20, 30);
        console.log(res);
    ```

3. 一般开发中通过exports或者module.exports暴露，通过global方式不符合CommonJS规范，用的少
4. 不论通过哪种方式暴露，在调用模块中，都需要先导入该模块
5. exports和module.exports的差异：
    - exports = name;暴露的变量和方法在调用模块中获取不到变量和方法，得到的是一个空对象
    - module.exports = name;暴露的变量和方法可以获取到


## 导入
1. require注意点
    - require导入模块可以不添加.js后缀，按照.js、.jsom、.node文件依次查找，无论找到哪一种类型的文件，最后都返回给我们一个js对象
    - 导入自定义模块必须添加路径，导入系统模块或者第三方模块可以不用添加路径