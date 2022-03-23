# Http

## 什么是HTTP模块
1. 通过NodeJS提供的http模块，我们可以快速地构建一个web服务器，也就是快速实现过去PHP服务器的功能(接收浏览器请求，响应浏览器请求等)。

## 通过HTTP模块实现服务器功能的步骤

1. 导入HTTP模块
    - `let http = require('http');`

2. 创建服务器实例对象
    - `let server = http.createServer();`

3. 绑定请求事件(注册请求的监听事件，接收浏览器的请求)
    - `server.on('request', function(req, res) {})`
    - http模块监听到浏览器请求后，会执行回调函数。回调函数有两个参数，一个为req参数(request)，一个为res参数(response)。
    - 通过req参数可以拿到浏览器发送请求时传递过来的参数。通过res可以给浏览器返回一些数据。
    - `res.end('要返回的数据')`：结束本次请求，并返回数据。

4. 监听指定端口请求
    - `server.listen(1080);`：监听指定的端口。

5. 代码示例
```
// 1. 引入http模块
let http = require('http');
// 2. 创建一个server服务的实例化对象
let server = http.createServer();
// 3. 监听请求事件
server.on('request', function(req, res) {
    // 3.2 通过res.writeHead()在头部写入数据
    res.writeHead(200, {
        // 3.3 中文乱码需要设置字符集为utf-8
        "Content-Type": "text/plain; charset=utf-8"
    });
    // 3.1 res.end("返回的数据");结束请求并返回数据
    res.end('新代码');
});
// 4. 指定监听端口
server.listen(2000);

```








