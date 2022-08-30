var ModuleA = (function() {
    // 1. 定义一个对象
    var obj = {}
    // 2. 在对象内部添加变量和方法
    obj.flag = true
    obj.myFunc = function (info) {
        console.log(info);
    }
    // 3. 将对象返回
    return obj
})()

if (ModuleA.flag) {
    console.log('小明是个天才');
}

ModuleA.myFunc('小明长得真帅');

console.log(ModuleA);