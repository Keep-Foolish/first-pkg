//原型链继承
function parent(name) {
  this.name = name;
}

parent.prototype.say = function () {
  console.log("hello");
};

function child(age) {
  this.age = age;
}

child.prototype = new parent(); //核心 原型链继承

const boy1 = new child(2);
const boy2 = new child();
const boy3 = new child();
console.log(boy1.age, boy2.say(), boy3.say());

//构造函数继承
function Parent(name) {
  this.name = name;
  this.arr = [1];
  this.say = function () {
    console.log("hello");
  };
}

function child(name, like) {
  Parent.call(this, name); //核心，因为这里可以给父级函数传参
  //不能继承父类原型上的方法
  this.like = like;
}

const b1 = new child("zhangwei","LOL")
const b2 = new child("zhangnana","rice")
console.log(b1.name,b1.like,b2.name,b2.like)
b1.arr.push(3)
b2.arr.pop()
console.log(b1.arr,b2.arr)