//对象
const name = "zw";
const a = "university";
const user = {
  name, //简写，当对象属性的key和value的变量相同时，可以简写成一个
  //这里的name表示name：name
};
//增
user["age"] = 19;
user.home = "anhui"; //两种增加属性的办法
user[a] = "ujs"; //当key的值和字符串相同时，可以直接用变量名
console.log(user);
//删
delete user.name;
console.log(user);
//改
user.name = "zhangwei";
user["home"] = "hefei"; //[]内如果不是变量名，要加‘’来表示属性的key
console.log(user);
//查
const userName = user.name;
console.log(userName);

//对象是引用类型变量
const desk = {
  height: "100cm",
  width: "80cm",
  weight: "50kg",
  price:{
    dollar:'30$',
    yuan:'210¥'
  }
};

const copyDesk = desk
copyDesk.height = '120cm'
console.log(desk)//只是给desk对象取了一个别名，两个名字共用一片存储空间


const copyDesk2 = {
    height:desk.height,
    width:desk.width,
    weight:desk.weight,
    price:desk.price
 }

 copyDesk2.price.dollar = "35$"
 console.log(desk)
 console.log(copyDesk2) 
 //只要是对象就是引用类型，对象的属性是对象引用后也是用的同一片存储空间

 //对象转换成json字符串 通过和json字符串的来回转换完成深拷贝
 const accessKey = {
    content:"ejfdhkjanckjnsjdnf",
 }
 const jsonString = JSON.stringify(accessKey)//json.stringify函数
 const obj = JSON.parse(jsonString)//json.parse函数
 console.log(jsonString)
 console.log(obj)

 obj.content = "1"
 console.log(accessKey)
 console.log(obj)
 
//解构语法
const newOjb = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
const { a: ttt, b, c, d } = newOjb
console.log(ttt, b, c, d)//重新给变量名
console.log(newOjb)

 