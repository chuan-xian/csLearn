# `CSS`初始化

1. 各浏览器公司所开发的浏览器，由于各种原因，对`html`标准的最终实现效果，总是有或多或少的差异性。另外，在实际应用中，一个元素的外在表现，通常都不需要也不会去使用`html`的初始外观效果。因此，我们在开发中，通常的做法是，将`html`所有可能的浏览器差异性和原始表现，通过一定的`css`样式设定，全部设置为的“相同的初始效果”（其实就是没什么效果），这就是所谓的`css`初始化。

2. 具体做法类似如下所示：

```css
// 假设此文件为：init.css
*{
	font-size:12px;
	line-height:2em;
	font-family: 微软雅黑,宋体,仿宋,”times New Roman”;
	margin:0;
	padding:0;
	border:0;
	list-style:none;
	list-style-position:inside;
}
```



3. 实际应用中，css初始化文件的具体写法并没有标准，因人而异，因需而定。

4. 在网页的样式设置中，通常都是首先引入该`css`初始化文件，然后再写具体页面中所需要的样式。这些写的好处就是：页面中所有元素的表现都全部按自己的设定，而不再依赖于浏览器的默认设置。这样就消除了不同浏览器的差异性，使网页表现更具有一致性。

5. 具体代码类似如下所示：

```css
<link  rel="stylesheet"  href="init.css" >
<style>
/*这里开始写本网页所需要的css样式设定*/
</style>

<!--也可能这样-->
<link  rel="stylesheet"  href="init.css" >
<link  rel="stylesheet"  href="public" >  // 若干网页的公共的样式
<link  rel="stylesheet"  href="product.css" >  // 当前网页的主要样式

<style>
/*这里可以写一些比较零碎，又可能变化比较频繁的部分样式*/
</style>
```

6. 清除边距代码：http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css

