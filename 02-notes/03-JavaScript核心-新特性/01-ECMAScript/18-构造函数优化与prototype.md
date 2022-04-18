# 构造函数优化

1. 构造函数存在性能问题，因为每个对象中的方法都是单独开辟一个存储空间，都是独立的。

2. 构造函数优化方式一：
    - 该方法也存在缺陷：
        - 阅读性差。
        - 污染了全局命名空间，即全局函数命名后，其它地方不能有和该函数重名的变量或方法。
```javascript
// 1. 声明一个函数，将该函数赋值给对象中的方法，这样不同的对象中的方法都是指向这个函数，节省了存储空间，提升了性能
function mySay() {
    console.log(this.name, this.age);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    // 2. 将全局函数赋值给构造函数中的方法，这样可以提升性能
    this.say = mySay;
}

let person1 = new Person('Mike', 22);
let person2 = new Person('Kobe', 20);

person1.say();
person2.say();
```

3. 构造函数优化方式二：
    - 因为优化方式一存在全局命名污染的问题，所以这里将方法放入一个新对象中，然后将该对象通过新对象调用该方法的方式赋值给构造函数的方法。
```javascript
let fns = {
    say: function () {
        console.log(this.name, this.age);
    }
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = fns.say;
}

let person1 = new Person('Mike', 23);
let person2 = new Person('Kobe', 33);

person1.say();
person2.say();
```

4. 构造方法优化三(最常用)：

```javascript
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Person.prototype = {
    say: function () {
        console.log(this.name, this.age, this.sex);
    }
}

let person1 = new Person('Mike', 20, 'm');
let person2 = new Person('Kobe', 22, 'w');

person1.say();
person2.say();
```

5. `prototype`是构造函数默认的属性，该属性就是用于保存公有的属性、方法。

6. 企业开发中常使用 `prototype` 的方式，既可以解决性能(不重复开辟内存空间)问题，也可以解决全局命名污染的问题。

7. `prototype`的特点
    - `prototype`中除了可以存储方法以外，还可以存储属性。
    - `prototype`中如果出现了和构造函数中同名的属性或者方法，对象在访问这些同名的方法或属性时，访问到的是构造函数中的数据。
    
8. `prototype`应用场景：
    - `prototype`中一般情况下，用于存储所有对象都相同的一些属性和方法。
    - 如果是不同对象特有的属性或者方法，我们会存储到构造函数中。
    
9. `prototype`三角关系解析：
    - 每个构造函数中都有一个默认的属性，叫做 `prototype`，该属性保存一个对象，称之为“原型对象”。
    - 每个“原型对象”中都有一个默认的属性，叫做 `constructor`， `constructor`指向当前原型对象对应着的那个“构造函数”。
    - 通过构造函数创建出来的对象，我们称之为“实例对象”，每个“实例对象”中都有一个都有一个默认的属性值，叫做 `__proto__`， `__proto__` 指向创建它的那个构造函数的“原型对象”。