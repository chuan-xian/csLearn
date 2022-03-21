// 导入内置的JS模块直接用名字即可
const { log } = require('console');
let path = require('path');

/**
 * path.basename('路径名', '过滤部分');会输出该路径名的最后一部分
*/
// 输出documents
let pathName = path.basename('/root/home/documents/');
console.log(pathName);
// 输出index.html
pathName = path.basename('/root/home/documents/index.html');
console.log(pathName);
// 过滤掉指定部分，输出index
pathName = path.basename('/root/home/documents/index.html', '.html');
console.log(pathName);

/**
 * path.dirname('路径名');获取路径名，舍弃最后一个部分
*/
// 输出/root/home/documents
pathName = path.dirname('/root/home/documents/index.html');
console.log(pathName);
// 输出/root/home
pathName = path.dirname('/root/home/documents/');
console.log(pathName);

/**
 * path.extname('路径名');获取该路径的扩展名
*/
// 输出.html
pathName = path.extname('/root/home/documents/index.html');
console.log(pathName);
// 该路径没有扩展名，输出空字符串
pathName = path.extname('/root/home/documents/');
console.log(pathName);

/**
 * path.isAbsolute("路径名");判断该路径是否为绝对路径
 * 在Linux中如果是/开头就是绝对路径，如果是.或..开头那就是相对路径
 * 在Windows中以盘符开头就是绝对路径
*/
// 以/开头是绝对路径，返回true
pathName = path.isAbsolute('/root/home/documents/index.html');
console.log(pathName);
// 以.开头是相对路径，返回false
pathName = path.isAbsolute('./root/home/documents/index.html');
console.log(pathName);
// 以盘符开头就是绝对路径，返回true
pathName = path.isAbsolute('c:\\a\\b\\c.html');
console.log(pathName);

/**
 * path.sep：获取当前系统中路径的分割符，Linux中为/，Windows中为\
*/
console.log(path.sep);

/**
 * path.delimiter：获取当前系统中环境变量的分隔符
 * Linux中为:
 * Windows中为;
*/
console.log(path.delimiter);

/**
 * path,parse('路径名');把路径名转换成对象
*/
pathName = path.parse('/root/home/documents/index.html');
console.log(pathName);

/**
 * path.format(对象名);把一个对象名转换为路径，上面一步的逆操作
*/
pathName = path.format(pathName);
console.log(pathName);

/**
 * path.join();拼接路径，如果后面的参数没有/则自动添加，如果后面的参数是../../这类的则向上返回
*/
// 输出a/c/d
pathName = path.join('a/c/', 'd');
console.log(pathName);
// 输出a/c/
pathName = path.join('a/c/', 'd', '../');
console.log(pathName);

/**
 * path.normalize('a/b//x//d///d.html);规范化路径
*/
// 输出a/b/c/d/e.html
pathName = path.normalize('a/b//c///d////e.html');
console.log(pathName);

/**
 * path.relative('路径名1', '路径名2');计算相对路径
*/
// 输出从目录1到目录2的相对路径，结果为..\..\f\h.html
pathName = path.relative('/a/b/c/d.html', '/a/b/f/h.html');
console.log(pathName);

/**
 * path.resolve('路径1', '路径2');类似于拼接路径，从路径1到路径2的完整路径
 * 注意：如果后面的路径为绝对路径，则所有前面的路径会被忽略
*/
// 输出绝对路径：e:\a\b\c\a\d.html
pathName = path.resolve('/a/b/c', './a/d.html');
console.log(pathName);
// 某个路径为绝对路径，前面的路径全部被忽略，输出e:\f\d\a\c.html
pathName = path.resolve('/a/b/c', './a/d.html', '/f/d/c', '../a/c.html');
console.log(pathName);
