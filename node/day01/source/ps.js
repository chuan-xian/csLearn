let http = require('http');
const querystring = require('querystring');

let server = http.createServer();
server.on('request', function(req, res) {
    let params = '';
    req.on('data', function(chunk) {
        params += chunk;
    });
    req.on('end', function() {
        console.log(params);
    })
})

server.listen(8888);

// http.createServer((req, res) => {
//     // 1. 定义变量保存传递过来地参数
//     let params = '';
//     // 2. 注意点：在NodeJS中，POST请求传递过来的参数，我们不能一次性拿到，必须分批获取。
//     // 2.1 客户端请求发过来的参数都存储在req对象中，给req绑定data事件，只要传递参数过来，就会执行回调函数，并把参数传给chunk
//     req.on('data', function(chunk) {
//         params += chunk;
//     });
//     // 3. 参数全部接收后执行end方法
//     req.on('end',function() {
//         // 把参数转为对象。
//         let obj = querystring.parse(params);
//         // 可以把数据返回给客户端
//         res.end(obj)
//     });
// }).listen(5000);


// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain; charset=utf-8'
//     })
//     if (req.url.startsWith('/index')) {
//         res.end('首页', );
//     }else if (req.url.startsWith('/login')) {
//         res.end('登录');
//     }else {
//         res.end(req.url);
//     }
// }).listen(5000);
