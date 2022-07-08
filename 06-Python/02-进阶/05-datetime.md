# `datetime`模块

1. `datetime`模块比`time`高级了不少，可以理解为`datetime`基于`time`进行了封装，提供了更为实用的函数，`datetime`模块的接口更直观、更容易调用

2. `datetime`模块中包含的类
```python
1. datetime：同时有时间和日期，常用

2. timedelta：主要用于计算时间的跨度

3. tzinfo：时区相关

4. time：只关注时间

5. date：只关注日期
```

3. `datetime`常用函数
```python
1. 获取当前时间
# 获取当前时间，返回的是一个datetime类型的结果
dt1 = datetime.datetime.now()

2. 获取指定时间
# 1999-10-1 10:28:25.123
dt2 = datetime.datetime(1999, 10, 1, 10, 28, 25, 123)

3. 将时间转换为字符串
# 将datetime类型的数据转为字符串
dt3 = d1.strftime("%Y-%m-%d %X")

4. 将格式化字符串时间转为datatime对象
# dt3和dt4的%Y等格式要一致
d4 = datetime.datetime.strptime(dt3, "%Y-%m-%d %X")

5.datetime类型的两个时间可以相减
# 返回的是一个timedelta类型的数据
dt5 = dt6 - dt7
# 返回dt6和dt7两个时间的间隔天数
dt5.days
# 返回除了间隔天数外，剩余时间换算成秒数的结果
dt5.seconds
```






