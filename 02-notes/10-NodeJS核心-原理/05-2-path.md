# path对象
1. 路径模块封装了各种路径的相关操作，和Buffer一样，NodeJS中的路径也是一个特殊的模块，不同的是Buffer已经添加在global上了，所以不需要手动导入。而path模块并没有添加到global上，所以使用时才需要手动导入。
    - `let path = require('path');`：path为系统模块，需要手动导入，直接导入模块名即可

2. 常见方法
    - `path.basename('路径名');`：获取路径名的最后一部分；
    - `path.dirname('路径名');`：获取路径名的前面部分，舍弃最后一个部分；
    - `path.extname('路径名');`：获取路径名的扩展名，包括.符号
    - `pth.isAbsolute('路径名');`：判断路径名是否为绝对路径；
    - `path.sep`：当前系统的路径分隔符，Linux为/，Windows为\
    - `path.delimiter`：当前系统的环境变量分隔符，Linux为:，Windows为;
    - `path.parse('路径名');`：把路径名转换成对象，如‘/root/home/documents/index.html’转换如下：
        ```
            {
                root: '/',
                dir: '/root/home/documents',
                base: 'index.html',
                ext: '.html',
                name: 'index'
            }
        ````
    - `path.format(对象名);`：把对象名转换为路径名，上一步的逆操作
    - `path.join('a/b', 'c', 'd', '../');`：拼接路径
    - `path.normalize('a/b//c///d////e/inde.html');`：规范化路径，把多余的/去掉，形成合法的路径名
    - `path.relative('路径1', '路径2');`：计算相对路径，即从路径1指定的文件或目录去到路径2指定多个文件或目录所要的相对路径
    - `path.resolve('路径1', '路径2', '路径3'...);`：解析路径，类似将路径拼接，../会返回上一级目录。要注意的是如果某个路径为绝对路径(/开头)，则该路径前面的全部路径都会被忽略

补充：Path对象的代码查看node/source/pathObject.js文件
