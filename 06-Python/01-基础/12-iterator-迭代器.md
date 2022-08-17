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


# 生成器

1. 概念解析：列表过大时，会占据大部分内存，而我们实际处理列表的过程往往只涉及其中相邻的小部分元素。如果列表中的元素可以用某种算法推导出来就不必一次声明全部元素，而是边循环边计算。
2. 这种边循环边计算的机制，就叫做生成器。
3. 生成器是典型的时间换空间。

## 生成器的两种形式

1. 用小括号()表示的生成器表达式（generator expression）
    - 生成列表和字典时，可以通过表达式推导完成，把推导表达式中的中括号换成小括号就是生成器表达式。
    - 显然生成器的大小不会随着生成元素的增加而增大。
    - 生成器不能够直接像列表一样打印出来。
    - 打印生成器需要借助python的内嵌方法`next()`，通过`next(生成器对象)`的方式调用。
    - 每次调用`next()`方法时，总是根据最后的值和生成器规定的方法计算下一个值。直到最后一个元素，抛出`StopIteration`错误。
    - 生成器是可迭代对象，所以在实际开发中往往很少通过`next()`来迭代调用生成器，而是通过`for-in`遍历，遇到最后一个`StopIteration`时自动停止。
2. 生成器函数（generator function）
   - 生成器函数的关键在于有`yield`，它会返回一个值，并且记住这个返回的位置。下一次`next()`迭代就从这个位置下一行继续执行。
   - 生成器函数并不是生成器，它运行后返回的结果才是生成器。
```python
# 普通函数
def fibonacci(n):
    i, j = 0, 1;
    while n > i:
        print(i, end=' ');
        i, j = j, i + j;
# 输出0 1 1 2 3 5 8
fibonacci(10);

# 生成器函数
def fibonacci(n):
    i, j = 0, 1;
    while n > i:
        yield i;
        i, j = j, i + j;

generator = fibonacci(10);
for x in generator:
    print(x, end=' ');
```






