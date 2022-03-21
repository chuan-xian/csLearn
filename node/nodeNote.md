# node笔记

# 一、概述
1. 什么是Node.js
- nodejs是一个基于“chrome V8”引擎的JavaScript运行环境

2. 什么是v8引擎
- v8引擎是一款专门解释和执行js代码的虚拟机，任何程序只要集成了v8引擎都可以执行js代码
    例如
    - 将v8引擎集成到浏览器中，那么我们的js代码就会被浏览器执行
    - 将v8引擎嵌入到NodeJS中，那么我们写的js代码就会被NodeJS所执行
    
3. 由于NodeJS中也集成了V8环境，所以浏览器可以解释执行JS代码
    - 可以直接在命令行工具中编写执行js代码(REPL -- Read Eval Print Loop:交互式解释器)
    - 可以在命令行工具中执行js代码文件中的js代码

4. webstorm中配置node(视频004NodeJS执行JS代码)

5. NodeJS环境和浏览器环境区别
    - NodeJS环境和浏览器环境一样都是一个JS的运行环境，都可以执行JS代码，但是由于宿主不同所以特点也有所不同
    1. 内置对象不同
        - 浏览器环境中提供了`window全局对象`
        - NodeJS环境中的全局变量不叫window，叫`global`

    2. this默认指向不同
        - 浏览器环境中全局this默认指向window
        - NodeJS环境中全局this默认指向空对象{}
    
    3. API不同
        - 浏览器提供了操作节点的DOM相关API和操作浏览器的BOM相关的API
        NodeJS环境中没有HTML节点也没有浏览器，所以NodeJS环境中没有DOM/BOM

6. 全局属性和方法
    - `__dirname`:所在文件的路径(不包含该文件名)
    - `__filename`:所在文件的绝对路径(包括该文件名)

    ```
        setTimeout(function(){
            // 1s后输出123
            console.log(123);
        }, 1000)
    ```
    ```
        setInterval(function(){
            // 每隔1s输出一次123
            console.log(123);
        }, 1000)
    ```
    - consloe：输出内容

# 二、模块化开发
## 导出导入
1. 什么是模块？
    - 在浏览器开发中为了避免命名冲突，方便维护等，我们采用类或者立即执行函数的方式来封装JS代码，来避免命名冲突和提升代码的可维护性。其实这里的一个类或者一个立即执行函数就是浏览器开发中的一个模块。
    ```
        let obj = {
            // 模块中的业务逻辑代码
        };
    ```
    ```
        (function(){
            // 模块中的业务逻辑代码
        })()
    ```
    - 存在问题：没有标准或规范，不能统一所有开发全部用类或者立即执行函数

2. NodeJS中的模块
    - NodeJS采用CommonJS规范实现了模块系统；
    - CommonJS规范规定了如何定义一个模块，如何暴露(导出)模块中的变量函数，以及如何使用定义好的模块
    - 在CommonJS中，一个文件就是一个模块
    - 在CommonJS中，每个文件中的变量、函数都是私有的， 对其他文件不可见
    - 在CommonJS中，每个文件中的变量、函数必须通过exports暴露(导出)之后，其他文件导入才可以使用
    - 在CommonJS中，想要使用其它文件暴露的变量、函数，必须通过require()导入模块才可以使用
    ``` CommonsJS(要导出的模块a.js)
        let name = 'zhangsan';
        function add(a, b) {
            console.log(a + b);
        }
        // 暴露方式一
        // exports.str = name;
        // exports.fn = add;

        // 暴露方式二
        // module.exports.str = name;
        // module.exports.fn = add;

        // 暴露方式三
        global.str = name;
        global.fn = add;
    ```
    ``` 导入前面的模块到本模块中
        let aModule = require('./a.js');
        
        // 暴露方式一和二都需要通过aModule来调用暴露的变量和函数
        // console.log(aModule.str);  // 输出'zhangsan'
        // aModule.fn(10, 20);  // 30

        // 暴露方式三，全局变量就不需要通过amodule调用暴露的变量和方法
        console.log(str);
        let res = fn(20, 30);
        console.log(res);
    ```

3. 一般开发中通过exports或者module.exports暴露，通过global方式不符合CommonJS规范，用的少
4. 不论通过哪种方式暴露，在调用模块中，都需要先导入该模块
5. `exports`和`module.exports`的差异：
    - `exports = name;`暴露的变量和方法在调用模块中获取不到变量和方法，得到的是一个空对象
    - `module.exports = name;`暴露的变量和方法可以获取到


## 导入
1. require注意点
    - require导入模块可以不添加.js后缀，按照`.js`、`.jsom`、`.node`文件依次查找，无论找到哪一种类型的文件，最后都返回给我们一个js对象
    - 导入自定义模块必须添加路径，导入系统模块或者第三方模块可以不用添加路径

# 三、包
1. 什么是包？
    - 编写代码的时候尽量遵守单一原则，也就是一个函数尽量只做一件事，不要一个函数既读取数据，又写入数据，又生成数据，代码维护难度加大。
    - 在模块化的开发中也一样，在一个模块(一个js文件中)尽量只完成一个特定的功能，所以有些比较复杂的功能可能需要多个模块组成。例如：jQuery选择器相关的模块在A模块，CSS相关的代码在B模块，...这样，我们就需要把这些模块组合在一起，才能构成完整的jQuery。维护多个模块之间关系的东西就是包。

2. NodeJS包管理
    - 在NodeJS中为了方便开发人员发布、安装和管理包，推出了一个包管理工具NPM(Node Package Manager)
    - NPM在搭建NodeJS环境时已经附带自动安装好
    - 通过NPM可以快速找到、安装、升级、卸载我们开发中相关的包

3. 管理包(npm官网：https://www.npmjs.com)
    - 终端输入`npm config list`可以查看当前npm的相关配置，其中`prefix`选项表示全局安装的路径，全局安装的包存储在该目录下
    - `npm init -y`：进入工作目录后，先执行该命令，初始化生产配置文件`package.json`文件
    - 全局安装(一般用于安装全局使用的工具，在所有项目中都可以使用，存储在全局`node_modules`中)
        - `npm install -g 包名`  // 默认安装最新版
        - `npm uninstall -g 包名`  // 卸载包
        - `npm update -g 包名`  // 更新包

    - 本地安装(一般用于安装当前项目使用的包，存储在当前项目`node_modules`中)
        - `npm install 包名`  // 本地安装包
        - `npm uninstall 包名` // 删除本地安装的包
        - `npm update 包名` // 更新本地安装的包
        - 本地安装就是进入项目所在的文件(`package.json`文件所在目录)，然后执行上面的命令进行安装

    - 安装指定版本的包，在包名后直接`@指定版本号`，如`npm install -g webpack@3.0`就是安装`webpack`的`3.0`版本
    - 通过`update`更新包的时候可能会不成功，可以通过先卸载当前版本，然后再直接安装，默认安装是最新版本

4. 包描述文件：`package.json`，定义了当前项目所需要的各种模块，以及项目的配置信息(比如名称、版本、许可证等元信息)
    - `npm install`命令会根据这个配置文件，自动下载所需要的模块，也就是配置项目所需要的运行和开发环境
    - `package.json`文件中，不能加入任何注释
    - `dependencies`：生产环境所依赖的包，一个关联数组，由包的名称和版本号组成
    - `devDependencies`：开发环境所依赖的包，一个关联数组，由包的名称和版本号组成
    - 通过`npm install webpack@3.0`和`npm install webpack --save`安装的包都是把依赖添加到`dependencies`中，而通过`npm install webpack --save-dev`安装的依赖包都是添加依赖到`devDependencies`中
    - 将项目拷贝给别人的时候，或者发布的时候，我们不会将`node_modules`也给别人，因为太大。并且有的包可能只是在开发阶段需要，但是在上线阶段不需要，所以需要分开指定。
    - 其他人拿到不包含`node_modules`的项目后，在项目中执行`npm install`命令，`npm`包管理器就会根据`package.json`配置文件自动安装所需依赖(包括`dependencies`和`devDependencies`中的全部依赖)。
    - 执行`npm install --development`则安装`devDependencies`中的依赖，执行`npm insatll --production`则安装`dependencies`中的依赖

# 四、资源下载镜像替换
## nrm(推荐使用)
1. 什么是nrm？
    - 由于npm默认会去国外原官网下载资源，所以对于国内开发者来说下载会比较慢，所以就有人写了一个nrm工具，允许你将资源下载地址从国外切换到国内。
        - `npm install -g nrm`  // 安装NRM
        - `nrm --version`  // 查看是否安装成功
        - `npm ls`  // 查看允许切换的资源地址
        - `npm use taobao`  // 将下载地址切换到淘宝
        - 后续下载包还是通过`npm install 包名`的方式，只是npm会把下载资源的地址自动替换为指定的国内地址
        - PS：淘宝资源地址和国外的地址内容完全同步。淘宝镜像和官方同步频率目前约为10分钟一次

## cnpm(不推荐使用)
1. cnpm和nrm的功能一致
    - `npm install cnpm -g -registry=https://registry.npm.taobao.org`：安装cnpm
    - `cnpm -v`：查看是否安装成功
    - 安装包的时候通过`cnpm`，而不是继续使用`npm`

## yarn
1. 什么是yarn？
    - yarn是由Facebook、Google、Exponent和Tidle联合推出的一个新的JS包管理工具，主要是为了弥补npm 5.0之前的一些缺陷。在npm 5.0之前，yarn的优势明显，但是现在没什么优势了，所以仍然推荐继续使用npm工具。

2. npm曾经的缺陷：
    - `npm install`安装的时候极慢。npm是按照队列执行每个package，也就是说必须要等到当前package安装完成后，才能继续后面的安装。
    - 同一个项目中，`npm install`的时候无法保持所安装依赖版本的一致性
        - `3.0.0`：明确安装的版本就是3.0.0版本
        - `~3.0.0`：表示安装3.0.x中最新的版本
        - `^3.0.3`：表示安装3.x.x中最新的版本

3. yarn曾经的优点：
    - 速度快：一是并行安装，即同步执行所有任务，同时安装所有的包依赖，提高了性能，二是离线模式，如果之前已经安装过一个软件包，用yarn再次安装的时候，直接从本地缓存中获取安装，不会再像npm一样从网络上获取安装
    - 安装版本统一：为了防止拉取到不同的版本，yarn有一个锁定文件(`lock file`)记录了被确切安装上的模块的版本号

4. npm现状：
    - 在工作目录下，除了`package.json`文件外，还有一个`package-lock.json`文件，里面写的是依赖包的具体版本信息，解决了原来版本一致性问题。

5. yarn的安装
    - `npm install -g yarn`：全局安装yarn
    - `yarn --version`：检查是否安装成功

6. yarn的使用
    - `yarn init -y`：先进入工作目录，然后初始化当前目录生成`packag.json`文件
    - `yarn add 包名`或`yarn add 包名 --save`或`yarn add 包名 --save-dev`：安装指定包
    - `yarn upgrade 包名 --last`：更新到最新版本
    - `yarn global add/upgrade/remove `：全局安装/更新/删除包

总结：使用npm就对了

# 五、npm核心api

## Buffer对象

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

## path对象

1. 路径模块封装了各种路径的相关操作，和Buffer一样，NodeJS中的路径也是一个特殊的模块，不同的是Buffer已经添加在global上了，所以不需要手动导入。而path模块并没有添加到global上，所以使用时才需要手动导入。
    - `let path = require('path');`：path为系统模块，需要手动导入，直接导入模块名即可

2. 常见方法
    - `path.basename('路径名');`：获取路径名的最后一部分；
    - `path.dirname('路径名');`：获取路径名的前面部分，舍弃最后一个部分；
    - `path.extname('路径名');`：获取路径名的扩展名，包括.符号
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