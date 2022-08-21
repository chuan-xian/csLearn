# `css`的四种样式

1. 行内样式
```css
<table style="border: blue;">
    // 表格标签
</table>
```

2. 内嵌样式
```css
<style>
    // css代码
</style>
```

3. 外链样式
```css
<link rel="stylesheet" href="./example.css">
```

4. 导入样式
```css
<style>
    @import "./example.css";
</style>
```

# 外链样式vs导入样式

1. 外联样式使通过`link`标签关联而导入外部样式。而导入样式通过`@import`关联，但是`@import`是`css2.1`推出的，所以有兼容问题。

2. 外链样式在显示界面的时候，会先加载`css`样式，再加载结构，所以用户看到界面的时候一定已经设置了样式。而导入样式在显示界面的时候，会先加载结构，再加载样式，所以用户看到界面时，不一定已经设置了样式。

总结：用外链样式就可以。



