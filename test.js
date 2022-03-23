// let buf = Buffer.alloc(5);
// console.log(buf);

// buf = Buffer.alloc(5, 17);
// console.log(buf);

// buf = Buffer.from('abcd');
// console.log(buf);

// buf = Buffer.from([1, 2, 3, 4]);
// console.log(buf);

// console.log(buf.toString());

// buf.write('abcdefg');
// console.log(buf);

// buf = buf.slice(1, 3);
// console.log(buf);

// console.log(Buffer.isEncoding('utf-8'));
// console.log(Buffer.isEncoding('gbk'));

// console.log(Buffer.isBuffer(buf));



// const { format } = require('path');
// let path = require('path');
// let pathName = path.basename('/a/b/c/d.html');
// console.log(pathName);
// pathName = path.dirname('/a/b/c/d.html');
// console.log(pathName);
// pathName = path.extname('/a/b/c/d.html');
// console.log(pathName);
// console.log(path.sep);
// console.log(path.delimiter);
// pathName = path.resolve('a/b/c', '/a/c');
// console.log(pathName);
// pathName = path.relative('/a/b/c/d.html', '/a/b/f/g/h/k.html');
// console.log(pathName);
// pathName = path.join('/a/c/b/h.html', '/a/x');
// console.log(pathName);
// pathName = path.normalize('a/c//d/s///s//s/\\/h.html');
// console.log(pathName);
// pathName = path.parse('/a/b/c/d.html');
// console.log(pathName);
// pathName = format(pathName);
// console.log(pathName);


// (function () {
//     console.log('hello world');
// })();

// function test(fn){
//     fn()
// }
// test(function(){
//     console.log('hello world');
// });


// let realName = 'zhangsan';
// let say = nameArg => console.log(nameArg);
// say(realName);

// let say = nameArg => console.log(nameArg);
// let realName = 'zs';
// say(realName);

// let realName = window.prompt('please input your name:');
// alert(realName);

// let arg = 123123;
// let boolvar = true;

// let res = arg.toString();
// console.log(res, typeof res);
// res = boolvar.toString();
// console.log(res, typeof res);

// let res = String(arg);
// console.log(res, typeof res);
// res = String(boolvar);
// console.log(res, typeof res);
// res = String(true);
// console.log(res, typeof res);
// res = String(123);
// console.log(res, typeof res);
// let res = String(null);
// console.log(res, typeof res);
// res = String(undefined);
// console.log(res, typeof res);

// arg = 123;
// let res = arg + "";
// console.log(res, typeof res);

let fs = require('fs');
let path = require('path');

// fs.stat('./test.js', function(err, stats) {
//     if (err) {
//         throw new Error('获取文件信息失败');
//     }else{
//         console.log(stats);
//     }
// })

// let stats = fs.statSync('./test.js');
// console.log(stats);

// fs.readFile('./test.js', 'utf-8',function(err, data){});
// let res = fs.readFileSync('./test.js', 'utf8');

// fs.writeFile('./test.js', 'aa', 'utf8', function(err) {});
// res = fs.writeFileSync('./test.js', 'utf8');

// fs.appendFile('./test.js', 'aaa', 'utf8', function(err) {});
// res = fs.appendFileSync('./test.js', 'aaaa', 'utf8');

// let readStream = fs.createWriteStream('./test.js', {encoding: 'utf8', highWaterMark: 64});
// let writeStream = fs.createWriteStream('./test.js', {encoding: 'utf8'});

// readStream.on('open',function() {});
// readStream.on('error',function() {});
// readStream.on('data',function(data) {});
// readStream.on('close',function() {});

// writeStream.on('open', function() {});
// writeStream.on('error', function() {});
// writeStream.on('close', function() {});
// writeStream.write('aaa');
// writeStream.end();


// class CreateProject {
//     constructor (rootPath, extPath) {
//         this.rootPath = rootPath;
//         this.extPath = extPath;
//         this.subFiles = ['images', 'css', 'js', 'index.html'];
//     }
//     initProject() {
//         let pathName = path.join(this.rootPath, this.extPath);
//         fs.mkdirSync(pathName);
//         this.subFiles.forEach(function(obj) {
//             if (path.extname(obj) == '.html') {
//                 let newPath = path.join(pathName, obj);
//                 fs.writeFileSync(newPath);
//             }else {
//                 let newPath = path.join(pathName, obj);
//                 fs.mkdirSync(newPath);
//             }
//         })
//     }
// }

// let project = new CreateProject(__dirname, 'taobao');
// project.initProject();

class CreateProject {
    constructor(rootPath, extPath) {
        this.rootPath = rootPath;
        this.extPath = extPath;
        this.subFiles = ['images', 'css', 'js', 'index.html'];
    }

    initProject() {
        let mainPath = path.join(this.rootPath, this.extPath);
        fs.mkdirSync(mainPath);
        this.subFiles.forEach(obj => {
            let newPath = path.join(mainPath, obj);
            if (path.extname(obj) == ".html") {
                fs.writeFileSync(newPath);
            }else {
                fs.mkdirSync(newPath);
            }
        });
    }
}

let project = new CreateProject(__dirname, 'JD');
project.initProject();







