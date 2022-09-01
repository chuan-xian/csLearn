# 一、认识路由

## 前端渲染 vs. 后端渲染

1. 在网页发展的早期，用的基本都是后端渲染，开发语言常用的如`jsp`/`php`等。浏览器等客户端请求数据的`url`发送到服务端后，服务器会通过正则表达式来检查客户端请求的`url`，然后交给一个`Controller`（控制器）处理，这个`Controller`向数据库中查找数据。比如用`php`写的后端程序，在服务端有一个`php`解析器，它会把从数据库中提取的数据经过动态解析后，直接把已经渲染好的相应的`html`页面发回给客户端，客户端收到渲染好的页面后可以直接在浏览器中展示。这就完成了一个`IO`操作。

- 如果要请求新的页面或资源，那么要重新发起请求。那时候没有`ajax`技术。这就是后端渲染，所谓后端渲染就是在客户端展现的页面，在服务器端就已经处理完毕，生成了渲染好的页面，只要客户端展现即可，不需要进行处理。
	
- 早期的网站开发整个`html`页面是由服务器来渲染的，服务器直接生产渲染好对应的`html`页面，返回给客户端显示。

- 后端路由：后端（服务器端）处理请求的`url`和返回的页面之间的映射关系。

2. 网页发展的第二个阶段就是前后端分离阶段，这时候`ajax`出现了，后端只提供`API`来返回数据，前端通过`ajax`获取数据，并且可以通过`js`将数据渲染到页面中。这样就能很大程度上分离前后端，后端专注于数据处理，前端专注于交互和可视化处理。并且在移动端出现后，后端不需要进行任何处理，依然使用之前的一套`API`即可。

- 现在很多网站还是采用本阶段的开发模式。

- 这个阶段的典型流程如下：客户端请求某个`url`的数据，但是后端有两个服务器，一个是静态资源服务器，一个是提供`API`接口服务的服务器。客户端请求的`url`会先发给静态资源服务器，该服务器会把对应的`html` + `css` + `js`资源发给浏览器，`html`和`css`可以直接在浏览器中执行，`js`需要浏览器解析执行。在`js`代码中，存在一些`ajax`的`api`接口请求，浏览器在解析到这些请求后，又向后端提供`API`接口服务的服务器发起请求，这个服务器就把对应的数据返回给浏览器，浏览器拿到数据后，再通过`js`（之前请求到的`js`代码）创建`html`元素并插入（这就是渲染过程）到文档中，最后由浏览器展示。

- `js`代码向`api`服务器请求数据后，服务器返回对应的数据，浏览器在解析这些数据及之前请求的`js`代码的时候，会生成一些`html`代码， 并把这些代码插入到`html`文档中，这就是前端渲染。

- jQuery也是这个阶段；

- 前后端分离阶段，后端只负责提供数据，不负责任何阶段的内容。

- 前端渲染：浏览器中显示的网页中的大部分内容，都是由前端写的`js`代码在浏览器中执行，最终渲染出来的网页。

3. 单页面富应用阶段：`SPA`最主要的特点就是在前后端分离的基础上加了一层前端路由，也就是前端维护一套路由规则。

- 整个页面只有一个`html`页面，在前后端分离阶段，静态资源服务器是有很多个页面的，每个页面都是由单独的`html+css+js`组成的。而在单页面富应用阶段，只有一个`index.html` + `css` + `js`（`css` + `js`可能不止一个）。

- 在单页面富应用阶段，一个典型的过程如下：在浏览器客户端请求某个`url`对应的资源，静态资源服务器会把整个`html`页面发回客户端，但是不是直接把所有`html`页面全部渲染出来，而是根据需要把相关的组件渲染出来。这里需要相关的技术支撑，即前端路由。比如网站前端分为三大页“主页、下载、关于”等，在点击主页的时候前端路由生成一个`xxx.com/home`之类的`url`，但是这个`url`不会向静态服务器请求页面，只是通过一些`js`代码进行判断，把之前已经向静态服务器请求到的`index.html`模板抽出对应的部分进行渲染。这就意味着之前向静态资源服务器请求的一个`index.html`模板中包含多个页面，只是根据不同`url`的请求在浏览器本地就能渲染出不同的页面，这种对应关系由前端路由进行映射和管理。

- 单页面富应用`SPA`中的静态资源服务器中，可能多个`url`都是指向同一个`html` + `css` + `js`，然后前端通过路由指向不同的组件进行渲染。前后端分离阶段的静态资源服务器中，不同的`url`对应着不同`html` + `css` + `js`，客户端请求的`url`和静态资源返回的`html` + `css` + `js`之间是一一对应的。

- 现在用得多的是`html` + `css` + `js`，早期没有`js`，在`SPA`中，`html`往往就一个，`css` + `js`可能不是一个，但是大部分也是一个。`vue`文件在打包的时候，往往一个`vue`就是一个页面，但是多个`vue`文件最终都被打包成一个`js`文件。浏览器客户端把`SPA`请求过来后，根据路由映射，再从请求过来的资源中根据请求的`url`进行解析。

- 前端渲染其实就是前端路由在管理`url`和组件之间的关系。改变`url`，页面不会进行整体刷新。

- 后端渲染对`SEO`优化好一点。

- 前端路由 vs. 后端路由

- 客户端请求的每一个`url`，都是映射着一个页面的，一一对应的关系。后端路由就是在服务端处理`url`和页面之间映射关系的路由。这种情况下渲染好的页面，不需要单独加载任何的`js`和`css`，可以直接交给浏览器展示，这样也有利于`SEO`。

- 后端路由的缺点：

- 1. 前后端无法分离，整个处理渲染的模块都是后端程序员开发和维护，增删改查数据库然后渲染一大堆工作。

- 2. 前端开发人员如果要开发页面，还需要学会`php`或`java`等语言来写，不然页面无法在后端渲染好。

3. `HTML`代码、数据甚至对应的逻辑会混在一起，开发和维护都很复杂。



# 二、刷新

1. 在后端渲染中，如果在浏览器中更改`url`一般会造成浏览器向后端服务器请求资源，局部或者全部刷新。但是前端路由不会造成刷新，也就是不会向静态资源服务器请求资源，前端路由的`url`改变了，它只是从早已请求好的资源中抽取需要的部分进行渲染。实现`url`改变但是不刷新有两种方式。一种是修改`URL`的`hash`值，另一种是`HTML5`的`history`模式：`pushState`。

2. `URL`的`hash`也就是锚点（`#`），本质上是改变`window.location`的`href`属性，但是直接在浏览器的`console`中输入`location.href="xxx"`是会改变`url`的尾部，如果开始请求`jd.com`，修改后的请求为`js.com/xxx`，进而会导致浏览器刷新请求静态服务器的资源。但是如果修改`location.hash=“xxx”`是只改变`url`的尾部，不会造成任何新的请求，请求的地址会变成`js.com/#xxx`，就是改变了锚点，但是不会刷新页面，即不会向后端的静态资源服务器发起请求。这就是前端路由。

3. `HTML5`的`history`模式，就是在浏览器的`console`中输入`history.pushState({}, '', '/xxx')`，`pushState`有三个参数，第一个是一个对象参数，第二个是一个`title`参数，主要传第三个参数，该参数为一个`url`值（有无斜线/都可以），输入后回车，会在前端路由中渲染出`jd.com/xxx`这个页面。这里非常类似于数据结构中的栈结构，在`console`中输入`history.pushState({}, '', '/xxx')`时就是把一个`url`压入栈中，而当输入`history.back()`时，会弹栈返回之前请求的页面，相当于浏览器的返回按钮，浏览器的地址栏也总是显示栈顶的`url`。

4. `HTML5`的`history`模式还有`history.replaceState({}, "", "/xxx")`，这就不是压栈弹栈的过程了，浏览器的返回按钮也不能用，这是直接替代操作。

5. `HTML5`的`history`模式之`go`，`history.go()`只能在`history.pushState()`模式下使用，因为它是在栈内前进后退移动的。`history.back()`等价于`history.go(-1)`，而`history.forward()`等价于`history.go(1)`。`history.go(n)`可以前进或者后退第`3`步中对应的栈，`n`为正表示前进，`n`为负表示后退，等价于点击浏览器上的前进或后退按钮`n`次。

6. `history.back()`和`history.forward()`都只能前进或后退一步，没有参数，而`history.go`可以前进或后退数步。



# 三、`vue-router`

1. 目前流行的三大框架都有自己的路由

- `Angular`的`ngRouter`
- `React`的`ReactRouter`
- `Vue`的`Vue-Router`

2. `vue-router`是`Vue.js`官方的路由插件，它和`Vue.js`是深度集成的，适合用于构建单页面富应用程序。官网：https://router.vuejs.org/zh/

3. `vue-router`是基于路由和组件的，路由用于设定访问路径，将路径和组件映射起来，在`vue-router`的单页面富应用程序中，页面的路径的改变就是组件的切换。

4. 步骤一：安装：终端输入`npm install vue-router --save`  //脚手架创建项目的时候也可以选择安装路由，并且脚手架安装的路由会全部配置好，只需要直接使用即可。这里主要演示手动安装。

- 在`src`下创建一个目录叫`router`，在`router`下创建一个`index.js`的文件，在该文件中配置路由相关信息。

- 首先在`index.js`中导入路由模块，`import VueRouter from "vue-router"`。还要导入`Vue`，后面才能调用`Vue.use()`。`import Vue from "vue"`。在`Vue3`中是`import {createRouter, createWebHashHistory} from "vue-router"`一句导入路由模块。

- 通过`Vue.use(VueRouter)`来安装插件，在`Vue`中不管使用任何插件，都要写`Vue.use()`来安装一下该插件。`Vue.use(VueRouter)`函数内部会调用`VueRouter.install`来安装路由。

- 创建路由实例，`const router = new VueRouter();`。


```vue
// Vue3的写法
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'  //导入Home组件  
const routes = [
	{
		//path其实就是<router-link>中的to属性所指向的目录，直接表现则是在浏览器地址栏
		path: '/',
		name: 'Home
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')//导入Abour组件
	}
]
const router = createRouter({  //vue3用的是createRouter
	history: createWebHashHistory(),
	routes
})
export default router
```


```vue
// Vue2的写法 
// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  //导入HelloWorld组件
// 1、通过Vue.use(插件)来安装插件
Vue.use(Router)
// 创建VueRouter对象，也就是创建路由实例，并传入路由映射配置
// const routes = [    // 这里写成了数组，那么下面实例中就只要写routes即可。
	//   {
	//     path: '/',
	//     name: 'HelloWorld',
	//     component: HelloWorld
	//   }
// ]
// 也可以先const声明路由，然后export导出
//  const router = new Router({
//    routes  //这里的路由规则由上面预先写好，然后用ES6的语法增强写法
//  })
//  export default router    //导出路由信息

// 直接全部导出，相当于从上面Vue.use(Router)下一行到export default router这一行的作用
export default new Router({
	// 配置路由和组件之间的映射关系
	routes: [
	{
		path: '/',    //必要的两部分是path和component，前者是浏览器中出现的路径，component是对应的组件
		name: 'HelloWorld',
		component: HelloWorld  //只要浏览器中出现path指定的路径，那么就显示component对应的组件，组件要import进行导入
	}
	]
})
```

5. 创建组件，在`src`的`components`目录下创建需要的组件的`vue`文件，在其中写好对应的组件。组件要显示成什么样子，就在这些对应的`vue`文件中写出对应的代码。最终这些组件都是在`App.vue`的`<template>`中通过`<router-link>`和`<router-view>`调用。

6. 第`5`步中写好的代码还要调用一下，要在`src`目录下的`App.vue`中注册这些组件。主要通过两个标签注册，`<router-link>`和`<router-view>`：`<router-link>`和`<router-view>`是`Vue-Router`里面已经注册过了的全局组件，可以在任何`vue`文件中使用。`<router-link>`最终会被渲染成`<a>`标签。该组件里面有一个`to`属性，`<router-link to="/home">首页<router-link>`该语句会在页面上显示“首页”两个字，然后点击会跳转到`to`属性指定的组件所渲染的页面。

- `<router-view>`决定`<router-link>`的页面显示在整个页面中的哪个位置，相当于一个占位的标签，类似插槽。路由切换时，切换的就是`<router-view>`挂载的组件，其他内容不会发生改变。

- `<router-view>`要么和`<router-link>`配合使用，展示`<router-link>`包裹的文字内容，点击的时候展示对应的组件，要么就是在路由`index.js`中展示`path`为`/`的根目录所指向的组件。

7. 第`6`步中注册的组件，会在`main.js`被导入并通过`render`函数渲染，最终显示在浏览器上面。在`main.js`中导入的时候，一个小细节可以注意。

```vue
// 这里注意，完整的写法应该是import router from './router/index.js'；
// 但Vue会自动查找这个目录下一个叫index.js的文件，所以可以省略后面的index.js；
import router from './router'  

// 在main.js中注册使用路由映射
new Vue({
	el:'#app',
	router,
	render: h => h(App)  
})
```

- **总结**：在模块化工程中使用它（因为是一个插件，所以可以通过`Vue.use()`来给当前开发的程序安装路由功能）
	- 第一步：导入路由对象，并且调用`Vue.use(VueRouter)`。
	- 第二步：创建路由实例，并且传入路由映射配置。
	- 第三步：在`Vue`实例中挂载创建的路由实例。


5. 步骤二：使用`vue-router`的步骤

- 第一步：创建路由组件。即在`components`目录下创建对应的组件文件（`.vue`文件）。
- 第二步：配置路由映射，即在`index.js`这个路由配置文件中配置组件和路径的映射关系。
- 第三步：使用路由，在`App.vue`中通过`<router-link>`和`<router-view>`引用组件。

6. 路由的处理流程：从`main.js`入口文件开始，都是创建`Vue`实例、渲染`App`这个组件并挂载到`index.html`中的某个标签上。在`App.vue`这个文件中，通过`<router-link to="/home">首页</router-link>`将“首页”两个字展示在浏览器中，同时又对应着`/Home`这个组件。而`/home`（注意这里`to`的属性值和`src/router/index.js`中的`path`对应）这个组件又要到`src/router`下的`index.js`中查找对应的路由规则才能找到这个页面，`<router-link>`中的`to`的值对应着`src/router/index.js`中的`path`属性的值，而根据`path`属性的值，可以找到`components`定义的组件。在`src/router/index.js`中`path`和`components`是一一对应的关系，`components`会最终决定在页面上显示的是哪个组件。

```vue
// Home.vue
<template>
	<div>
		This is Home page!
	</div>
</template>
<script>
export default {
	name: 'Home'
}
</script>
<style>
</style>
```

```vue
// About.vue
<template>
	<div>
		This is About page!
	</div>
</template>
<script>
export default {
	name: 'About'
}
</script>
<style>
</style>
```

```javascript
// index.js
import Vue from 'vue'
import Router from 'vue-router'
// 通过@或者相对路径都可以找到对应的vue文件
import Home from '@/components/Home'
import About from '../components/About'
Vue.use(Router)
export default new Router({
	routes: [
		{
			// path: '',省略根目录也可以，
			path: '/',
			redirect: '/home'
		},
		{
			// path路径大小写都可以
			path: '/home',
			component: Home
		},
		{
			path: '/About',
			component: About
		}
	],
	mode: 'history',
})
```

```vue
// App.vue
<template>
	<div id="app">
		<router-link to="/home">首页</router-link>
		<router-link to="/about">关于</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'App'
}
</script>
<style>
</style>
```


```javascript
import Vue from 'vue'
import App from './App'
// 这里实质是导入router目录下的index.js文件，它会自动查找这个文件，所以可以省略不写
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	// 挂载router路由，这里才是真正使用路由
	router,
	render: h => h(App)
})
```

- 总结：
	- 所有的组件`vue`文件都是在`App.vue`中通过`<router-link>`和`<router-view>`调用显示的。
	- 具体的映射规则是由`index.js`中的`routes`路由规则决定的，所以所有`vue`文件都要导入到`index.js`中。
	- 而`main.js`作为总入口，既要通过`render`函数渲染`App.vue`，也要导入`index.js`中路由规则。

**路由规则`routes`中，路径`path`和重定向`redirect`大小写都没关系，`component`指定组件要和`components`目录下对应的组件（即对应的`vue`文件）名称保持一致。**


- 启动`vue`的本地运行环境，如果是`vue2`就要用`npm run dev`，如果是`vue3`就要用`npm run serve`。具体使用会有提示的。


## 7. 路由使用流程总结

1. 安装：`npm install vue-router --save`

2. `src`下新建目录`router`，在`router`下新建`index.js`

```javascript
import Vue from 'vue'
import Router from 'vue-router'

// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
const routes = [
	//配置路由映射关系
]

const router = new VueRouter({
	routes
})

// 3.导出router
export default router

//4.第2和第3步可以合并为一步
export default new Router({
	routes:[]
})
```

3. 在`main.js`中用`import router from './router'`，再在实例中使用一下`router`。




# 四、路由补充

1. 当前实现的路由切换中，默认不渲染任何组件，但是我们一般进入一个网站后，默认会显示首页，这时候可以在路由配置的文件`index.js`的`routes`下添加一项配置进行重定向：

```vue
{
	//根目录/在这里加不加都可以，这里写path:''也是可以的
	path: '/',
	//重定向至home路径指向的组件，也可以写成redirect: '/home'
	redirect: 'home'
  }
```

2. `vue`路由的默认模式是`hash`模式，浏览器中显示为带`#`的锚点格式，不太美观，可以把路由改为`history`模式。在创建的`VueRouter`实例中指定模式为`history`即可。

```vue
const router = createRouter({
	routes,
	mode: 'history'
})
```

3. `<router-link>`其他属性

- `tag`：`<router-link>`默认被渲染为`<a>`标签，而`tag`属性可以指定`<router-link>`标签被渲染为什么组件，如`tag="button"`。

- `replace`：该属性没有值，设置了该属性则不会留下`history`记录，直接表现就是浏览器的后退键不起作用，相当于“第二节中的`4`，等于`replaceState()`”。

- `active-class="xxx"`：`<router-link>`标签默认会被渲染为`<a>`标签，而且默认会增加两个`class`属性，分别为：`class="router-link-exact-active router-link-active"`，`router-link-active`这个类表示当前组件被选中时，所以可以用`.router-link-active`来设置选中组件的`css`样式。而`active-class="xxx"`就是修改默认的`router-link-active`的，假设`active-class="active"`，那么`<router-link>`标签就会被渲染成`<a>`标签，且增加两个`class`属性，其中一个值为`active`（取代了`router-link-active`）。

- 如果有多个组件，每个组件单独这么设置`active-class`反而麻烦，此时可以在路由配置文件`/src/router/index.js`中配置：即在路由实例的内部`routes`配置规则中增加一项配置`linkActiveClass： 'active'`，这样就把默认增加的两个`class`属性之一设置为了`active`。但是实际开发中一般不会修改这个，直接使用`router-link-active`。在进行高亮显示导航菜单或者底部`tabbar`时，会使用到该类。

4. 通过代码修改路由：直接在`App.vue`文件的`<template>`标签中写一个触发函数，比如`<button @click="xxx">`触发某个函数，然后在`<script>`中的`methods`中实现这个函数，在这个函数中通过`this.$router.push('/home')`这样的方式跳转到不同的组件。点击这个`button`按钮的时候浏览器会跳转到`push`指定的组件所渲染的页面。`$router`是`Vue-Router`给所有的组件都增加的一个属性。除了`push`外，还可以用`this.$router.replace("/about")`的方式这样跳转（参考第二节的“刷新”）。`push`或`replace`的括号中放的是完整路径。其实也可以写`history.pushState()`来修改，但是不建议这么操作，因为这绕过了`router`路由。



# 五、动态路由

1. 在某些情况下，一个页面的`path`路径可能是不确定的，比如我们进入用户界面时，希望是如下路径：`/user/aaa`或`/user/bbb`，除了`/user`之外，后面的用户`id`是根据具体情况而变的。这种`path`和`component`的匹配关系，就是动态路由（也是路由传递数据的一种方式）。

2. `this.$route`表示哪个组件处于活跃状态（即选中状态），那么它就代表取得哪个组件。

3. 案例演示（思路顺序）：

- 首先，创建一个`User.vue`的组件，在其中写入组件需要展示的内容和数据。

- 其次，在`src/router/index.js`中配置动态路由，就是`routes`规则中添加对应的配置：

```javascript
// index.js
import Vue from 'vue'
import Router from 'vue-router'
// 导入各种需要的文件
import User from '../components/User'
Vue.use(Router)
export default new Router({
	routes: [
		// 其他路由配置项
		…
		{
			// 冒号后面是一个变量，如path: '/user/:userId'，对应User组件中的$route.paramas.xxx这个值
			path: "/user/:userId",
			component: User
		}
	],
	mode: 'history',
})
```


- 在`App.vue`的`<router-link to="/user/zhangsan">`中写上一个值，这个值会传递给上面的`userId`，这样在浏览器的地址栏就会出现`xxx.com/user/zhangsan`这样的路径。

- 但是这样还是固定写法，实际开发中`zhangsan`这个变量应该是从服务器动态获取的，所以应该写成`<router-link :to="'/user/'+xxx">`在这里绑定上面的`xxx`，这样就会实现跳转。`to`用`v-bind`绑定后，`/user/`部分用单引号引起来，是常量，而`xxx`则是变量。这里意思就是点击`<router-link>`所包裹的内容时，跳转到`to`属性绑定的组件`/user/xxx`所指向的内容。而这个`xxx`到底是哪个用户的数据则是根据从服务器请求到的数据动态改变的，并且这个`xxx`会传递给路由配置文件中绑定的`component`的组件。这涉及到路由传参。

```vue
// App.vue
<template>
	<div id="app">
		<img src="./assets/logo.png">
		<br>
		<router-link to="/home">首页</router-link>
		<router-link to="/about">关于</router-link>
		<!-- 1. 这里是最简单的固定写法 -->
		<router-link to="/user/zhangsan">用户1</router-link>
		<!-- 2. 这是实际开发中的写法，后面常常绑定的是变量，变量的值来自服务器 -->
		<router-link :to="'/user/'+userId">用户2</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'App',
	data(){
		return {
			// 3. 这里的lisi是举例，实际userId的值应该是父组件从服
			// 务器请求而来的，或者是组件自身请求服务器而来的
			userId: 'lisi'
		}
	}
}
</script>
<style>
#app {
	text-align: center;
}
</style>
```

4. 在真正实现`User`组件的`User.vue`文件中，如果要用到变量`xxx`，那就通过`$route.params.xxx`（注意不是`router`，其中的`xxx`也是根据`index.js`中的`path`定义的名称决定），在`<script>`标签中要加`this`，`mustache`语法中不需要加`this`。



# 六、路由的懒加载（108课时）

1. 当打包构建应用时，`js`包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应的组件，这样就更加高效了。其实是对不同的`css`和`js`文件进行了分包。比如打包后`js`分为三个`js`包，`app`开头的就是程序员自己开发的业务代码，`vendor`开头的就是第三方的模块代码，如`vue`框架、`axios`网络请求框架等，`manifest`开头的是为我们打包的代码作底层支撑的，比如在项目开发中用到的`ES6`、`CommonJs`等导入导出，有些浏览器是不支持的，就需要该包中的支撑来转换或者处理。

2. 主要是针对程序员自己开发的业务代码进行分包，随着项目的发展，代码体积迅速增加的一定是业务代码。而打包的时候会把所有程序员开发的业务代码打包到`app`开头的一个`js`文件中，如果这个文件过大，对用户体验并不友好。我们需要把每一条路由所对应的组件分别打包成一个`js`文件，而且所有的`js`文件不会一次性全部请求到客户端，只有在这个路由被访问到的时候，才加载对应的组件。懒加载就是用到时再加载。

3. 路由懒加载就是在配置路由条目的时候，写成箭头函数的方式：

```vue
component: () => import('../views/About.vue')
```

4. 路由懒加载的其他方式：

- 早期加载方式，结合`Vue`的异步组件和`Webpack`的代码分析（了解即可）

```vue
const Home = resolve => {require.ensure(['../components/Home.vue'], () => { resolve(require('../components/Home.vue'))})}
```

- `AMD`写法

```vue
const About = resolve => require(['../components/About.vue'], resolve)
```

- 上面第`3`步中的箭头写法，也是在`ES6`中使用更加简单的写法来组织`Vue`异步组件和`Webpack`的代码分割。不过建议先导入要用的组件，然后在`component`处直接写组件名即可。

```vue
const Home = () => import('../components/Home')
```

5. 进行路由懒加载后，打包后的`js`文件个数会增加。一个懒加载的组件对应一个`js`文件。




# 七、路由嵌套

1. 路由嵌套是一个很常见的功能，比如在`Home`页面中，我们希望通过`/Home/news`和`/Home/message`访问一些内容。一个路径映射一个组件，所以访问这两个路径也会分别渲染两个组件。

2. 实现嵌套路由有两步：

- 第一步：创建对应的子组件，并且在路由映射中配置对应的子路由
	- 先创建需要的组件所对应的`vue`文件，在里面写好对应的代码。然后`/src/router/index.js`中通过懒加载导入该组件并配置路由映射信息。

```vue
const HomeNews = () => import('../components/News')
```


```vue
{
	path: '/home',
	name: 'Home',
	component: Home,
	children: [   //这里面也可以写redirect进行重定向设置默认路径
		{
			//这里不需要加斜杠写成/news，而是会自动在上一层的基础上被写成/home/news
			path: 'news',
			component: HomeNews
		},
		{  // 其它子组件
		}
	]
},
```

- 第二步：在组件内部使用`<router-view>`标签。
	- 根据`/src/router/index.js`中的路由配置可以知道，`News`组件引入后是显示在`Home`组件中作为子组件的。那么就要在`Home.vue`文件的`<template>`中用`<router-link to="/home/news">新闻</router-link>`，这里`to`的属性要写完整路径。再用`<router-view>`标签进行展示。



# 八、传递参数

1. 第一种是动态路由：

- 第一步：在`App.vue`的`<router-link :to="'/user/'+userId">`中绑定`to`属性到`/user/userId`上，`userId`是从服务器请求来的某个用户的数据，不同用户数据不同。`App.vue`中的`to`的属性和`index.js`中的`path`是对应的。

- 第二步：在`index.js`中配置路由映射信息，`path: '/user/:userId',component: User`，这样就把`App.vue`中接收到的`userId`传给`User`组件了，也就是`User.vue`文件。

- 第三步，`User`组件展现什么内容，其实是在`User.vue`中实现的，在`App.vue`中只不过是展示一下。在`User.vue`中要获取到`userId`的信息，通过动态路由就要用`$route.paramas.userId`。

2. 第二种是`query`方式：

- 第一步：在`App.vue`的`<router-link :to="{path: '/user',  query: {name: "feng", age:19, gender: 'M'}}">`绑定相关属性，`to`绑定的`path`和`index.js`中的`path`对应，`query`传递一个对象，这个对象里面的属性会反映在`url`的`query`字段中。

第二步：在`index.js`中配置路由映射信息，`path: 'user', component: User`正常配置路由信息。

第三步：在`User`组件中（即`User.vue`文件），一样会接收到`App.vue`传递过来的参数，通过`$route.query`即可提出`query`传递的对象，取其中单独的一个信息用`$route.query.name`这样的方式。

3. 数据都是`App.vue`作为入口文件，从后台服务器请求来数据，然后传递给各个不同的`Vue`组件，如`Home`、`About`、`Profile`等，在组件文件中接受到数据后再处理。而`App.vue`仅仅是展示这些组件和传递参数给这些组件。中间的映射关系在`index.js`中设置。

4. `<router-link>`最终是会渲染成为`<a>`标签的，所以在`App.vue`中才可以点击`<router-link>`标签包裹的内容从而实现路由跳转（也就是浏览不同的页面）。但是也可以不写`<router-link>`标签来实现跳转，而是写一个触发函数（比如写一个`button`按钮，里面写一个触发函数），然后把触发函数实现并在其中执行`this.$router.push('/user'+this.userId)`这样的方式来实现路由跳转。

5. 通过`push`这类方式进行路由跳转的时候，如果要传递参数，那么就`this.$router.push({path: '/user', query: {name: 'feng', age: 20, height: 1.99}})`，这样就把数据从`App.vue`中传递到了`User`组件中，在`User`组件中还是按照`query`的方式提取数据即可使用。

6. 如果有大量的数据要传递，那就使用`query`的方式，传递的是一个对象，如果只有简单的一个数据，那就使用`paramas`的方式传递。

7. 像`User.vue`、`Profile.vue`等文件都是普通的组件文件，负责具体实现组件的功能、样式等，而`index.js`文件则负责映射组件对应的路径。而`App.vue`则是入口文件，把接收到的数据传递给各个子组件，并且通过`<router-link>`这样的标签在`App.vue`的页面上给各个子组件提供入口（`App.vue`中如果没有`<router-link>`标签，那就默认把路由中的根组件渲染进去）。而`main.js`渲染的就是`App.vue`这个文件。



# 九、`router`和`route`的区别(113课时)

1. `$router`就是`index.js`中创建的路由实例，而`$route`则是`index.js`中创建的路由条目中被选中的当前那条条目。

2、在`Vue`中使用`Vue-Router`等第三方插件时，都要用`Vue.use(Router)`来安装`Router`等第三方插件，而`use`会调用第三方插件对应的`install`方法。以`VueRouter`为例，它会调用`install`方法，而`install`方法引用自`install.js`文件，在`install.js`注册了`<router-link>`和`<router-view>`等全局插件。

3. 所有的组件都继承自`Vue`类的原型。



# 十、导航守卫

1. 在不同的组件之间进行切换时，在切换之前做一些监听，监听到某些行为之后执行用户想要的某些操作。

2. 导航守卫有多种，全局的导航守卫、路由独享导航守卫、组件内的导航守卫。

3. 前置导航守卫用`beforeEach`，后置钩子用`afterEach`，参数都是一样的，前置表示在路由跳转之前调用该钩子函数（`beforeEach`），后只表示在路由跳转之后调用该钩子函数（`afterEach`）。

4. 导航守卫的钩子函数中，参数分别是`to`、`from`、`next`，`to`表示跳转后的路由，`from`表示跳转前的路由，`next`可以指定跳转到某个组件。

5. 在导航守卫必须要调用一下`next()`，而后置钩子就不需要调用`next()`。

6. 在路由配置中，可以添加`meta`项，在里面存储一些元数据，如`title(网页标题)`等，然后在钩子函数回调的时候用`to.meta.title`调用。如果存在路由嵌套，那就而默认打开的是子路由，那获取父路由的`meta`信息要用`to.matched[0].meta.title`之类的方式。



# 十一、`keep-alive`

1. 如果用户在当前父路由的某个子路由下，而这个子路由不是当前父路由的默认路由。此时，用户点击其它和父路由平级的路由，页面发生跳转到达新的路由处。如果这时候用户点击返回，那么将到达原父路由的默认子路由处，而不是点击前的子路由。

2. 在切换不同路由指向的组件时，每个组件都会经历对应的生命周期，也会回调对应的钩子函数（`beforeCreate`、`created`等八个周期函数）。这也就意味着每次切换路由后，都创建了新的组件。

3、`keep-alive`是`vue`内置的一个组件，可以使被包裹的组件保留状态，或避免被重新渲染。

4. `router-view`也是一个组件，如果直接被包在`keep-alive`中，所有路径匹配到的视图组件都会被缓存。

5. `activated(){//当前组件被选中时回调的函数，即处于活跃状态的组件}`和`deactivated(){//与activated函数相反}`两个函数只有在当前组件被`keep-alive`标签包裹时才有用。

6. 按照`4`中的写法，那么所有的组件都会被渲染成`keep-alive`的缓存模式，而有时候需要在进入某个组件的时候重新渲染该组件，可以用`exclude`参数，`<keep-alive exclude="Profile,User"></keep-alive>`就可以每次重新进入`Profile`和`User`组件的时候新创建这些组件，离开这些组件的时候销毁之。还要注意写法，组件之间用逗号隔开，不能有空格。还有`include`属性，只有指定的组件才会被缓存。

第111课时到第118课时代码缺少

