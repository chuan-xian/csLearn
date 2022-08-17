# set集合

## 概述

1. 类似`dict`，是一组`key`的集合，不存储`value`

2. 本质是无序、无重复元素的集合

3. 创建set
```python
# 需要一个list或tuple或dict作为输入

# 结果为{1, 2, 3, 4, 5}
set1 = set([1, 2, 2, 3, 4, 5, 4, 5]);  

# 结果为{1, 2, 3, 4, 5}
set2 = set((1, 2, 2, 3, 4, 5, 4, 5));

# 结果为{1, 2}
set3 = set({1: "good", 2: "nice"});
```

4. 添加元素
```python
# 1. 元素值须为不可变对象，故list和dict不能作为元素值传参，而元组可以
# 2. 此外元素值可以重复传入，但没效果，因为set本身是不重复的无序集合
set1.add(元素值);
```

5. `set1.update(元素值)`：插入`list`、`tuple`、字符串，但是是拆分成一个一个的元素后再插入，

6. 删除
```python
# 删除指定的元素值
set1.remove(元素值);
```

7. 遍历
```python
# set因为是无序的，因此不能通过下标等取某个值，只能遍历

for i in set1:
    # 遍历输出set1
    print(i);

for index, data in enumerate(set1):
    # 将set1枚举，产生下标
    print(index, data);
```

8. 交集 & 并集
```python
set1= {1, 2, 3};
set2 = {2, 3, 4};

# 结果：{2, 3}
set3 = set1 & set2;

# 结果：{1, 2, 3, 4}
set4 = set1 | set2;
```

助记：
> 1. 添创删交更并遍（天窗山脚跟病变）



