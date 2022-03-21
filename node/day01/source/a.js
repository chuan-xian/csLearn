let name = 'zhangsan';

function add (num1, num2){
    console.log(num1 + num2);
}

// 暴露方式一
// exports.str = name;
// exports.fn = add;

// 暴露方式二
// module.exports.str = name;
// module.exports.fn = add;

// 暴露方式三
global.str = name;
global.fn = add;