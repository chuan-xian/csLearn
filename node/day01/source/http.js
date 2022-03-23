let http = require('http');

// let server = http.createServer();

// server.on('request', function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/palin; charset=utf-8'
//     })
//     res.end('中文代码');
// });

// server.listen(2080);

// 创建服务器的时候直接传入一个监听回调函数，在尾部监听端口
// http.createServer(function(req, res) {
//     res.end('god');
// }).listen(3090)

// http.createServer((req, res) => {
//     res.end('dog');
// }).listen(4090);



http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    })
    if (req.url.startsWith('/index')) {
        res.end('首页111', );
    }else if (req.url.startsWith('/login')) {
        res.end('登录222');
    }else {
        res.end(req.url);
    }
}).listen(5000);



