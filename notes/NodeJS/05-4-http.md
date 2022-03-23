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

6. 链式简写
```
// 创建服务器的时候直接传入一个监听回调函数，在尾部监听端口
http.createServer(function(req, res) {
    res.end('god');
}).listen(3090)

http.createServer((req, res) => {
    res.end('dog');
}).listen(4090);
```

## 路径分发
1. 路径分发也称之为路由，就是根据不同的请求路径返回不同的数据。

2. 如何根据不同的请求路径返回不同的数据？
    - 通过请求监听方法中的request对象，我们可以获取到当前请求的路径。
    - 通过判断请求路径的地址，就可以实现不同的请求路径返回不同的数据

3. req本质：request本质上是一个`http.IncomingMessage`类的实例，其中有一个url属性，可以根据其判断用户的请求路径
    ```
        http.createServer((req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/plain; charset=utf-8'
            })
            if (req.url.startsWith('/index')) {
                res.end('首页', );
            }else if (req.url.startsWith('/login')) {
                res.end('登录');
            }else {
                res.end(req.url);
            }
        }).listen(5000);
    ```
4. res本质：response对象本质上是一个`http.ServerResponse`类的实例
    - `res.write('返回数据');`该函数只返回数据，并不结束请求，所以需要手动调用一次res.end()来结束请求，否则浏览器一直在刷新页面请求数据。
    - `res.write('返回数据');`可以返回多次数据。


