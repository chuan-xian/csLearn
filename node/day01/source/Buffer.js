// 创建5个字节的Buffer对象
let buf = Buffer.alloc(5);

// 输出该字节对象
console.log(buf);

// 用数字1填充该字节数据
let buf1 = Buffer.alloc(3, 1);
console.log(buf1);

// Buffer对象的本质是一个数组
console.log(buf1[1]);

// 创建Buffer对象的方法二
let buf3 = Buffer.from([1, 2, 3]);
console.log(buf3);
let buf4 = Buffer.from('abc');
console.log(buf4);

// 将字节数据转换为字符串
let res = buf3.toString();
console.log(res);

// 向buf中写入Buffer数据
buf.write('abcd');
console.log(buf);

// 判断是否支持某种编码
console.log(Buffer.isEncoding('utf-8'));

// 判断是否为Buffer对象
console.log(Buffer.isBuffer(buf));

// 切片
let res1 = buf.slice(1, 3);
console.log(res1);

// 拼接
let res2 = Buffer.concat([buf, res1, buf]);
console.log(res2);