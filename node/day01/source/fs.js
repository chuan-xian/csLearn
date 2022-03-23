// 导入fs文件模块到当前文件中
let fs = require('fs');
let path = require('path');

/**
 * 1. fs.stat是一个异步函数，第一个参数为要查看的文件的路径名
 * 2. 第二个参数是一个函数，有两个参数
 * 2.1 第一个参数为err，表示获取文件失败后的信息，获取成功则为空值null
 * 2.2 第二个参数为stats，表示获取文件成功后的信息，获取失败则返回undefined
*/
// fs.stat(__filename, function(err, stats) {
//     // console.log(stats);
//     if (stats.isFile()) {
//         console.log('当前获取了一个文件');
//     }else if (stats.isDirectory()) {
//         console.log('当前获取了一个文件夹');
//     }
// });

/**
 * 
*/

// let stats = fs.statSync('./a.html');
// console.log(stats);
// if (stats.isFile()) {
//     console.log('file');
// }else if (stats.isDirectory()) {
//     console.log('directory');
// }


/**
 * 读取文件
*/

// fs.readFile(__filename, 'utf-8', function(err, data){
//     // console.log(data);
//     // console.log(data.toString()); 
// });

// let str = fs.readFileSync(__filename, 'utf-8');
// console.log(str);


// fs.writeFile('./.gitignore', 'everything', 'utf-8', function(err){
//     if (err) {
//         throw new Error('写入数据失败');
//     } else {
//         console.log('写入数据成功');
//     }
// });

// let str = fs.writeFileSync('./.gitignore', 'ha');
// console.log(str);

// fs.appendFile('./.gitignore', ' new Thing', 'utf-8', function(err){
//     if (err) {
//         throw new Error('写入数据失败!');
//     }else {
//         console.log('写入数据成功!');
//     }
// });

// let res = fs.appendFileSync('./.gitignore', ' more thing');
// console.log(res);



/**
 * 分批写入数据：creteReadStream()
*/
// // 1. 创建一个读取流
// let readStream = fs.createReadStream('./.gitignore', {
//     // 默认读取的数据放入Buffer中，指定为utf-8则转为字符串
//     encoding: 'utf-8',
//     // 每次读取数据的大小，单位是字节
//     highWaterMark: 1
// })
// // 2. 该读取流通过事件监听读取数据，共有四个事件，分别为open、error、data、close
// readStream.on('open', function() {
//     console.log('读取流和文件建立关系成功，即打开文件成功!');
// });
// readStream.on('error', function() {
//     console.log('打开文件失败!');
// });
// // data事件方法的回调函数有参数，每次读取到的数据都存在data中
// readStream.on('data', function(data) {
//     console.log('每次读取到的参数：', data);
// });
// readStream.on('close', function() {
//     console.log('数据读取完后关闭文件!');
// });


/**
 * 分批写入数据
*/
// // 1. 创建一个写入流
// let writeStream = fs.createWriteStream('./.gitignore', {encoding: 'utf-8'});
// // 2. 监听写入流事件，
// writeStream.on('open', function() {
//     console.log('表示打开文件成功');    
// })
// writeStream.on('error', function() {
//     console.log('表示打开文件失败');
// })
// writeStream.on('close', function() {
//     console.log('表示关闭文件');
// })
// // 3. 写入数据
// let data = '我是即将写入的数据';
// let index = 0;
// let timeId = setInterval(function() {
//     let ch = data[index];
//     index++;
//     // 4. 真正写入数据
//     writeStream.write(ch);
//     // 5. 清除计时器
//     if (index == data.length) {
//         clearInterval(timeId);
//         // 6. 写入流要手动关闭
//         writeStream.end();
//     }
// }, 2000);

// let readStream = fs.createReadStream('./test.mp4');
// let writeStream = fs.createWriteStream('./ok.mp4');
// readStream.pipe(writeStream);


/**
 * 目录操作练习
*/
fs.mkdir('./abc', function(err){
    if (err) {
        throw new Error('目录创建失败!');
    }else{
        console.log('目录创建成功!');
    }
});

fs.rmdir('./abc', function(err){
    if (err) {
        throw new Error('删除目录失败');
    }else{
        console.log('删除目录成功');
    }
});

fs.readdir('./', function(err, files) {
    if (err) {
        throw new Error('读取目录失败');
    }else {
        files.forEach(function(obj) {
            let pathName = path.join(__dirname, obj);
            console.log(pathName);
        })

    }
})








