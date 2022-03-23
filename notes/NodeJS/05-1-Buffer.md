# Buffer对象
1. 什么是Buffer对象？
    
    - Buffer是NodeJS全局对象上的一个类，是一个专门用于存储字节数据的类。NodeJS提供了操作计算机底层的API，而计算机底层只能识别0和1，所以就专门提供了一个用户存储字节数据的类。

2. 如何创建一个Buffer对象
    
    1. 通过Buffer.alloc()创建
        - `Buffer.alloc(size[, fill[, encoding]])`：创建一个指定大小的Buffer,size表示开辟多少个字节的内存空间，fill为初始化的填充数据(可选)，encoding表示编码方式(默认utf-8)。
        - 实例：`let buf = Buffer.alloc(5);`即创建一个5个字节的buffer对象，通过`console.log(buf)`输出会得到<Buffer 00 00 00 00 00>，log自动将存储的数据转换成16进制再输出。
        - 实例：`let buf = Buffer.alloc(5, 17);`，然后`console.log(buf)`会输出<Buffer 11 11 11 11 11>；

    2. 通过Buffer.from(string[, encoding])创建
        - 将一个字符串或者数组转换为二进制数据进行存储
        - `let buf = Buffer.from('abc');`会把字符串“abc”转换成二进制数据存储在buf中，通过`console.log(buf)`即可查看该二进制数据。

    3. Buffer对象的本质
        - Buffer创建的对象本质上是一个数组，根据上面的例子，每个字节就是一个元素，如果设置`buf[0] = 6`，那么第一个字节中存储的就是数字6。

3. Buffer常用的实例方法
    - `buf.toString();`：将Buffer的实力化对象buf转换为字符串。
    - `buf.write(string[, offset[, length]] [, encoding])`：可以向buf中写入字符串或者数组string。offset为开始写入前要跳过的字节数，默认为0。length表示要写入的字节长度，默认为buf.length-offset。
    - `buf.slice(start[, end])`：截取字节数据buf的部分字节数据，start表示开始截取的地方，默认为0。end为截取停止的位置，默认为结尾。最终的截取范围是[start, end)，包含头部，不包含尾部。
    - `Buffer.isEndoding(string)`：检测Buffer对象是否支持某种编码方式，默认支持的是utf-8。如`let res = Buffer.isEncoding("gbk");`返回false。
    - `Buffer.isBuffer(boj)`：检测是否为Buffer类型对象。`let obj = Buffer.alloc(5);`创建一个5字节的obj对象，然后`let res = Buffer.isBuffer(obj);`可以检测obj是否为Buffer类型对象。
    - `Buffer.byteLength(string)`：检测字节长度。如`Buffer.byteLength(obj)`就可以获取obj的字节长度，也可以obj.length获取。
    - `Buffer.concat([buf1, buf2, buf3...]);`：可以拼接buf对象为一个Buffer对象。

补充：Buffer对象的代码查看node/source/Buffer.js文件
