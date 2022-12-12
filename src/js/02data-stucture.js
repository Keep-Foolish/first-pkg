//栈
const stack = [];
stack.push(1, 2, 3, 4);
const a = stack.pop();
console.log(stack, a, stack.length);

//面向对象
function Deleted() {
  return this.name.pop();
}

const students = {
  name: [],
  size: function () {
    return this.name.length;
  },
  add(item) {
    this.name.push(item);
  }, //简写，函数名和key值相同
  Deleted, //简写，函数已经在对象外定义过，且函数名和key值相同
};
students.add("zw");
students.add("zcy");
students.add("zyx");
const nameDelete = students.Deleted();
console.log(students.name, nameDelete);

//队列
//push pop shift unshift
//分为左进右出和右进左出
const QueueLin = {
  capacity: [],
  size: function () {
    return this.capacity.length;
  },
  add(item) {
    // 从左边进入队列
    this.capacity.unshift(item);
  },
  remove() {
    return this.capacity.pop();
  },
};
QueueLin.add(1);
QueueLin.add(2);
QueueLin.add(3);
console.log(QueueLin.remove(), QueueLin.size(), QueueLin.capacity);

const QueueRin = {
  capacity: [],
  size: function () {
    return this.capacity.length;
  },
  add(item) {
    // 从右边进入队列
    this.capacity.push(item);
  },
  remove() {
    return this.capacity.shift();
  },
};
QueueRin.add(1);
QueueRin.add(2);
QueueRin.add(3);
console.log(QueueRin.remove(), QueueRin.size(), QueueRin.capacity);

//哈希表
// key-value pair
const ageList = new Map();
//set添加值
ageList.set("zhangwei", 19);
ageList.set("zhangchuankang", 52);
ageList.set("yangbaodi", 49);
//get取值
console.log(ageList.get("zhangwei"));
console.log(ageList.values());

//set
// 单一的value，set的中的元素不会重复
const set = new Set([1, 1, 2, 3, 4]);
// 做基础数据类型的去重
console.log(set);
