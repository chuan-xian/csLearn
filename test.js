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


(function () {
    console.log('hello world');
})();

function test(fn){
    fn()
}
test(function(){
    console.log('hello world');
});