# `math`库

1. 导入库：`import math;`

2. `math.ceil(数字)`：向上取整
```python
import math;
num = math.ceil(4.1);
print(num);  // 5
```

3. `math.floor(数字)`：向下取整
```python
import math;
num = math.floor(4.8);
print(num);  // 4
```

4. `math.modf(数字)`：返回小数部分和整数部分
```python
import math;
[num1, num2] = math.modf(4.2);
// 0.20000000000000018 4.0，小数部分会存在精度差
print(num1, num2);
```

5. `math.sqrt(数字)`：开平方
```python
import math;
num = math.sqrt(4);
print(num);  // 2.0
```

# `random`随机数

1. 导入库： `import random;`

2. `random.choice([1,3,5,7,9])`：在给定的内容中随机取出一个

3. `random.choice(range(5))`：`range(5)`表示从0开始生成自然数序列，直到`n-1`

4. `random.choice("string")`：会把`string`当成一个字符数组，随机挑选一个字符

5. `random.randrange(1,100,2)`：从 `1-100` 之间每隔 `2` 个数字取一个数生成集合，然后随机取一个数。省略 `1` 则从 `0` 开始，省略 `2` 则间隔为 `1` 

6. `random.random()`：随机生成一个 `[0,1)` 之间的浮点数

7. `random.shuffle(列表)`：将序列的所有元素随机排序
```python
import random;
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 该函数永久修改原列表的顺序，但不返回新列表
random.shuffle(mylist);
print(mylist);
```

8. `random.uniform(3,9)`：在 `[3,9]` 之间随机生成一个实数(可为整数，也可为浮点数)