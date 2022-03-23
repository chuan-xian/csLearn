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




