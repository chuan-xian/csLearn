# 迭代器

## 概述

1. 可迭代对象
> - 可以直接作用于for循环的对象统称为可迭代对象(Iterable)
> - 判断：
> - `isinstance()`：判断一个对象是否为可迭代对象(Iterable)
> - 使用前先导入包：`from collections import Iterable`
> - `print(isinstance([], Iterable))`：判断列表是否是`Iterable`，结果为`true`

2. 可以直接作用于`for`循环的数据类型一般分为两种：
> - 集合数据类型：`list`、`tuple`、`dict`、`set`、`string`
> - `generator`，包括`生成器`和带`yield`的`generator function`

3. 迭代器：
> - 不但可以作用于`for`，还可以被`next()`函数不断调用并返回下一个值，直到最后抛出一个`StopIteration`错误表示无法继续返回下一个值
>
> - 可以被`next()`函数不断调用并返回下一个值的对象称为迭代器(`Iterator`对象)
> 
> - 判断：
>   - `isinstance([], Iterator)`：判断列表是否为迭代器，结果为`false`
>   - `l = (x for x in range(5))`：返回一个迭代器
>   - `print(next(l))`  # 会输出0
>   - `print(next(l))`  # 会输出1
>   - `print(next(l))`  # 会输出2
>   - `print(next(l))`  # 会输出3
>   - `print(next(l))`  # 会输出4

4. 注意区分
> - 可迭代对象是`Iterable`，而迭代器是`Iterator`
> - 两者都是用`isinstance()`函数判断，第一个参数为判断的对象，第二个为判断的类型
> - `list`、`tuple`、`dict`、`set`、`string`都是可迭代对象，但不是迭代器

5. 转为迭代器
> - `Itera = iter([1, 2, 3])`：`list`本身不是`Iterator`，这样转换后就是了










