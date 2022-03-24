let fs = require('fs');
let http = require('http');
let path = require('path');

http.createServer((req, res) => {
    // console.log(req.url);
    // if (req.url.startsWith('/index')) {
    //     req.url += '.html';
    //     let pathName = path.join(__dirname, req.url);
    //     let str = fs.readFileSync(pathName);
    //     console.log(str);
    //     res.end(str);
    // }else if (req.url.startsWith('/login')) {
    //     let newPath = path.join(__dirname, req.url);
    //     newPath += '.html';        
    //     let content = fs.readFileSync(newPath);
    //     res.end(content);
    // }
    readFiles(req, res);
}).listen(3000);



function readFiles(req, res) {
    console.log(req.url);
    let newpath = path.join(__dirname, req.url);
    // console.log(newpath);
    fs.readFile(newpath, function(err, data) {
        if (err) {
            console.log(newpath);
        }
        res.end(data);
    });
    
}