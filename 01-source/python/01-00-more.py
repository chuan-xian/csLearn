# endstr = 'end';
# str = '';
# for line in iter(input, endstr):
#     str += line + '\n';
# print(str);

# num = 102.15948233953;
# num1 = round(num, 4);
# print(num1);

# num = 106;
# num1 = hex(num);
# print(num1);
# num2 = oct(num);
# print(num2);

# str = '物品\t\t单价\t\t数量\n苹果\t\t15元\t\t2个\n栗子\t\t8元\t\t3个'
#
# print(str);
# print(repr(str));

# opt = eval('10 + 3');
# print(opt);

# num = 10;
# str = 'new string';
# float = 10.23;
#
# print("num = %d, str = %s, float = %f" % (num, str, float));
# print("num =",num, "str =",str, "float =",float);


# str = '''this is the first line;
#     this is the second line;
#         this is the third line.
# '''
#
# print(str);
# print('''
#     this is the first line;
#         this is the second line;
#             this is the third line.
# ''')
#
# str = 'this\n is\tthe\n\t first \n\t\tline';
# print(str);
# print(r"this\n is\tthe\n\t first \n\t\tline")


# oldstr = 'feng is a good man';
#
# mytab = oldstr.maketrans('abcds', '+-*/)');
# newstr = oldstr.translate(mytab);
#
# print(newstr);

# mylist = [1, 2, 3, 4, 5];
# print(mylist);
# mylist.pop();
# print(mylist)
# mylist.pop(1);
# print(mylist);
# mylist.remove(3);
# print(mylist);

# mydict = {'name':'feng', 'age': 18, 'gender': 'm', 'score':19};
# print(mydict);
# mydict.pop('name');
# print(mydict);


# myset = {1, 3, 3, 2, 2, 4, 4, 5, 5, 6};
# print(myset);
# myset.pop();
# print(myset);
# myset.remove(3);
# print(myset);


# mylist = [1, 2, 3, 4, 5, 6];
# for k, v in enumerate(mylist):
#     mylist[k] = v + 1;
#     print(v);
# print(mylist);


# generator = (x * x for x in range(5));
# print(generator);
# # print(next(generator));
# # print(next(generator));
# # print(next(generator));
# # print(next(generator));
# # print(next(generator));
# # print(next(generator));
#
# for x in generator:
#     print(x);

# def fibonacci(n):
#     i, j = 0, 1
#
#     while(i < n):
#         print(i, end=' ')
#         i, j = j, i + j
#
# fibonacci(10)
# print(type(fibonacci))


# def fibonacci(n):
#     i, j = 0, 1;
#     while n > i:
#         print(i, end=' ');
#         i, j = j, i + j;
#
#
# fibonacci(10);
#
#
# def fibonacci(n):
#     i, j = 0, 1;
#     while n > i:
#         yield i;
#         i, j = j, i + j;
#
# generator = fibonacci(10);
# for x in generator:
#     print(x, end=' ');


def func(args):
    print(args);
    args[0] = 5;
    print(args);

list1 = [1, 2, 3, 4];
func(list1);
print(list1);














