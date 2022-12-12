//把经典函数理解成一个大的对象
//箭头函数没有上下文
//函数本身就有一个原型对象--prototype
//new函数得到一个对象   constructor -> object
//函数可以当构造函数来使用
function test() {
    console.log("abc")
}

test.prototype.makeMoney = function() {
    console.log("def")
}

const simpleObj = {}
simpleObj.__proto__ = test.prototype//手动改__proto__指向
simpleObj.makeMoney()

//继承
const fnObj = new test()//new的时候会执行一次  abc
fnObj.makeMoney()//继承到test的getmoney属性 def






