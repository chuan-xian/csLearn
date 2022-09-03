# 一、简介

1. `Vue`中发送网络请求的方式非常多，其一就是传统的基于`XMLHttpRequest(XHR)`的`Ajax`请求，但是实际项目中很少使用，因为`ajax`的配置和调试方式非常混乱，代码风格看起来也比较混乱，所以真实的开发中很少直接使用`ajax`，而是使用`jQuery-Ajax`。

2. `jQuery-Ajax`相对于`ajax`较为好用，但是在实际的基于三大框架的项目开发中，还是几乎不用。首先，在`Vue`等基于前端框架的项目中已经不需要使用`jQuery`了，而为了进行一个网络请求，特意引入一个`jQuery`并不合算。并且`Vue`开发的项目比用`jQuery`开发的项目代码量少，完全没有必要为了用网络请求就使用`jQuery`这个重量级的框架。

3. 第三个选择就是官方在`Vue 1.0`版本的时候推出的`Vue-resource`，`Vue-resource`的体积相对于`jQuery`体积小很多。但是在`Vue 2.0`之后，官方就不再更新`vue-resource`了，以后也不再提供更新支持，所以，实际的项目开发中也不会使用`Vue-resource`来进行网络请求。

4. 选择前端开发中使用最多的就是`axios`。


# 二、`JSONP`

1. 在前端开发中，一种常见的网络请求方式就是`JSONP`，使用`JSONP`最主要的原因往往是为了解决跨域访问的问题。

2. `JSONP`原理：`JSONP`的核心在于通过`<script>`标签的`src`来帮助我们请求数据。原因是我们的项目部署在`domain1.com`服务器上时，是不能直接访问`domain2.com`服务器上的资源的。这个时候，我们利用`<script>`标签的`src`帮助我们去服务器请求到数据，将数据当作一个`JavaScript`的函数来执行，并且执行的过程中传入我们需要的`json`。所以，封装`jsonp`的核心就在于我们监听`windows`上的`jsonp`进行回调时的名称。


# 三、`axios`优点

1. 在浏览器中发送`XMLHttpRequest`请求。

2. 在`node.js`中发送`http`请求。

3. 支持`Promise API`。

4. 拦截请求和响应：在发送网络请求的过程中，如果还想再做一些额外的操作，可以拦截请求。同样，在拿到响应的结果后，如果想对响应结果做一些转换，也可以进行拦截。

5. 转换请求和响应数据。


# 四、`axios`请求方式

1. 支持多种请求方式

- `axios(config)`
- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`
