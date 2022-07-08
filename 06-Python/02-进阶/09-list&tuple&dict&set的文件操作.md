# `list` & `tuple` & `dict` & `set 的文件操作
1. 导入模块：
> `import pickle`  #数据持久性模块

2. 写入数据：
```python
file1 = open(path, "wb")
# myList为要写入的数据，file1写入的目的文件
pickle.dump(myList, file1)
file1.close()
```

3. 读取数据：
```python
file2 = open(path, "rb")
# file2为源文件
templist = piclle.load(file2)
file2.close()
```