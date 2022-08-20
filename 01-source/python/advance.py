import time

# c = time.time();
# print(c);
#
# t = time.gmtime(c);
# print(t);
#
# t = time.localtime(c);
# print(t);
#
# # t = time.mktime(t);
# # print(t);
#
# t = time.asctime(t);
# print(t);
#
# t = time.ctime(c);
# print(t);


# m = time.ctime();
# print(m);
#
# n = time.asctime();
# print(n);
#
# a = time.mktime(time.localtime());
# print(a);


f = open("test.txt", 'r', encoding='utf-8');
print(f.encoding);

# str = f.read(10);
# print(str);
str1 = f.readlines(5);
print(str1);

f.seek(6);
str2 = f.readlines(6);
print(str2)

# print(f);

f.close();













