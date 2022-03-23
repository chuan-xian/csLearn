let fs = require('fs');

let readStream = fs.createReadStream('./test.mp4', {highWaterMark: 1000000});
let writeStream = fs.createWriteStream('./back.mp4');

readStream.on('open', function(){
    console.log('文件打开成功!');
});
readStream.on('error', function() {
    console.log('文件打开失败!');
});
readStream.on('data', function(data) {
    console.log('写入数据中:');
    writeStream.write(data);
});
readStream.on('close', function(){
    console.log('写入完毕，关闭文件');
    writeStream.end();
});

writeStream.on('open', function() {});
writeStream.on('error', function() {});
writeStream.on('close', function() {});