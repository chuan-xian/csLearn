# Turtle模块(了解即可)

1. 首先要导入`turtle`库：`import turtle`
   
2. 默认方向是向右，坐标原点`(0, 0)`在幕布正中央

3. 运动命令
```python
# 向前走多少步
turtle.forward(n);

# 向后走多少步
turtle.backward(n);

# 向右转多少度
turtle.right(n);

# 向左转多少度
turtle.left(n);

# 移动到坐标为(x,y)的位置
turtle.goto(x, y);

# 笔画运动的速度，范围是1-10
turtle.speed(n);
```

4. 笔画控制命令
```python
# 笔画抬起，在移动的时候不会绘图
turtle.up();

# 笔画落下，在移动的时候绘图
turtle.down();

# 笔画的宽度
turtle.pensize(n);

# 改变海龟的朝向
turtle.setheading(n);

# 笔画的颜色，可以使其他
turtle.pencolor("red");

# 恢复所有设置，清空窗口，重置turtle状态(即回到原点)
turtle.reset();

# 清空窗口，不会重置turtle(即不会到原点)
turtle.clear();

# 绘制一个圆形，r为半径，e为边数(可省略，则为圆)
turtle.circle(r, e);
```

5. 笔画填充
```python
turtle.begin_fill();
turtle.fillcolor("red")
# 某个范围，可以通过画笔移动圈出一个范围
turtle.end_fill()
```

6. 其它命令
```python
# 程序不结束，继续执行
turtle.done();

# 撤销上一次动作
turtle.undo();

# 隐藏海龟
turtle.hideturtle();

# 显示海龟
turtle.showturtle();
```







