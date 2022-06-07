# 字典

## 概述

1. 字典使用键-值对(`key-value`)存储，具有极快的查找速度

2. key的特性
> 1. key必须唯一
> 
> 2. key必须是不可变对象
> 
> 3. 字符串、整数等都是不可变的，可以作为key，常用字符串作key
> 
> 4. list是可变的，不能作为key
> 
> 5. 字典是无序的

3. 字典申明
```python
dictName = {"keyName1": value1, "keyName2": value2 [, ...]};
dict1 = {"feng": 100, "ge": 99};
```

4. 字典访问
```python
dictName["key"];

#结果：100
dict1["feng"];
```

5. 添加字典元素
```python
#就是直接赋值一个新的键值对即可
dictName["kayName"] = value;
```

6. 修改字典
```python
#将一个新的值赋值给字典元素
dictName["keyName"] = newValue;
```

7. 删除字典元素
```python
#删除对应的key-value元素，如果不指定默认删除最后一个
dict.pop("keyName");
```

8. 遍历
```python
for key in dict:
    # 输出key
   print(key);

for value in dict.values():
    # 输出value
    print(value);

for k, v in dict.items():
    # items是一个元组列表[("feng", 100), ("ge", 99)]
    print(k,v);

for k, v in enumerate(dict):
    # dict被枚举列出，[(0, 100), (1, 99)]
    # 字典无序，但在这里被排序了
    print(k, v);
```

9. `dict & list`
   - 字典查找和插入速度极快，不会随着`key-value`的增加而变慢，`list`要遍历，会变慢
   - 字典需要占用大量的内存，内存浪费多，`list`占用内存少，浪费内存少
















