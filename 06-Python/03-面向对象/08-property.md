# `property`

1. 原先限制访问的属性，访问的时候需要设置`set`/`get`方法，较为麻烦，用`property`方法可以简写

2. 简写方法
```python
# 私有属性
def __init__(self, age):
    #__age为私有属性
    self.__age = age

# 简写方法

# @property表示下面的方法是get方法
@property
# 方法名是私有属性名去掉双下划线
def age(self):
    return self.__age;
# "私有属性名.setter"表示下面的方法是set方法
@age.setter
def age(self, age)
    self.__age = age

# 访问私有属性
    # set私有属性age直接用"对象.私有属性"
    per.age = 10
    # get私有属性age也是直接用"对象.私有属性"
    print(per.age)

# 私有属性定义的时候还是要双下划线
# 但是访问的时候get方法用@property修饰
# set方法用"@私有属性名.setter"修饰，就可以直接访问了
```


