//this最后调用函数的对象
//1.全局声明的函数中的this，默认指向global
function getGlobal() {
  console.log(this);
}
getGlobal(); //global对象
//2.对象中函数的this取决于调用者
const obj = {
  a: {
    age: 18,
    name() {
      console.log(this.age);
    },
    d() {
      console.log(this.b);
    },
  },
  b: "bbb",
  c() {
    console.log(this.b);
  },
};
obj.a.name(); //18
obj.a.d(); //undefined
obj.c(); //bbb
//手动改变this指向 apply call bind
//已经有方法了，希望其它对象可以直接调用
//call 和 apply 只是给函数传参写法不一样，apply是数组，call是散开的
function thisname(a,b) {
  console.log(this.name);
  console.log(a+b)
}

const zoo = {
  name: "yancheng",
  a: "dog",
  b: "cat",
  c: "horse",
  getGlobal,
};
zoo.getGlobal();//输出zoo对象
thisname.apply(zoo,[1,2])//apply 数组传参
thisname.call(zoo,1,2)//call 直接传参

const functionObj = {
    name:"zhanwgei",
    dayin () {
        console.log(this.name)
    }
}

functionObj.dayin.apply(zoo)//yancheng

//bind创建一个新函数，使原函数的this强绑定到新函数上
const newZoo = thisname.bind(zoo)
newZoo(1,2)
//新函数，直接传参
//箭头函数的this没有指向