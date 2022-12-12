// 原生类型
const a = 1;
// 包装类型
const aa = Number("1");

//保留两位小数
const b = (1 / 3).toFixed(2);
console.log(b);

// 逻辑运算
// 1.&&与
// 2.||或
//用||传默认值
const bb = undefined;
const aaa = bb || 5;
const c = 1;
const d = c || 5;
console.log(aaa);
console.log(d);

// 比较运算符
// > < >= <=

//js中==  !=忽略了类型比较,===   !==比较时包括类型
//一般情况下只用 ===
if (true != 1) {
  console.log("双等号");
}

if (true !== 1) {
  console.log("三等号");
}

//optional chainning
// 每个对象属性不同，有的为空   ?.遇到空返回undefined 不会报错
const people = {
  family: {
    brother: null,
    sister: {
      name: "pjw",
    },
  },
};
console.log(people?.family?.brother?.name);
//在ES2015之前
console.log(
  people && people.family && people.family.sister && people.family.sister.name
);
// && 两个都是true才行
// || 有一个是true就是true

//流程控制
if (2>1) {
    console.log("1")
} else if (2>3) {
    console.log("2")
} else {
        console.log("3")
}

for(let i = 0; i < 5; i++) {
}

while(false) {

}

do {

} while(false)


const nameLong = 'pjw'
switch(nameLong) {
    case 'pjw': {
        console.log('匹配上了')
        break;
    }
    default: {
        console.log('不知道啥名')
    }
}

// 经典函数
// 没有函数重载:js中一切皆变量，函数名就是变量名,如果两个函数名字相同，后面的函数将覆盖前面的函数
function test() {
    const f = 1;
    // 返回值
    return f;
}

function add(name, age) {
    return name + age;
}

const name = 'aaa'
const age = 111
console.log(add(name, age))

// 在对象中简写
const functionSet = {
    test() {
        console.log("test")
    },//key值和函数名相同，省略key值
    add,//属性是一个函数，而且key值和函数名相同，简写成函数名
}

functionSet.test()
console.log(functionSet.add(1,2))

//匿名函数
const nimingfunction = function() {
    console.log('nimingfunction')
}
nimingfunction()
//调用时直接用变量名

//箭头函数 省略function关键字
const arrowFunction = () => console.log('arrowFunction');
const arrowFunctionParam = (a, b) => a + b;
const arrowFunctionParam2 = (a, b) => {
    const t = a;
    const s = b;
    return t + s;
}
console.log(arrowFunctionParam(1,2))
console.log(arrowFunctionParam2(1, 2))