from traceback import print_stack


num1 = 10;

# 1. python没有++/--
# num1++;
# num1--;
print(num1);

# 2. ord('string')、chr(n)
str = ord('B');
print(str);
chr = chr(67);
print(chr);

# 3. \
print('this is a \
test!')

# 4. [1, 2, 3, 4] (1, 2, 3, 4) {'name': 'Kobe', 'age': 19}
print([1, 2, 
3, 4])
print((1, 2,
3, 4))
print({'name':
'Kobe', 'age': 20})

# 5. help
# help('keywords');

# 6. help('global')

# print(help('False'))

# 7. id()

str1 = 'hello';
str2 = 'hello';

print(id(str1));
print(id(str2));



