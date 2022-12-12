//调用微信api

// const success = () => {
//     console.log("request successfully")
// }

// const fail = () => {
//     console.log("request faily")
// }

// const requestObj = {
//         url:"192.168.1.1",
//         success,
//         faily:fail,
//         complete () {
//             console.log("request finished")
//         },

// }

// wx.request(requestObj)

//foreach遍历数组
const array1 = [1, 2, 3, 4, 5];
array1.forEach((a, b, c) => console.log(c));
//如果前面的参数用不到，只能先列出来，后面不用也没关系

//slice
array1.map((item) => item + 1).forEach((item) => console.log(item));
console.log(array1.join(":"));
console.log(array1.slice(0, 3));
//slice根据索引取元素，左闭右开，浅拷贝，可以用来翻转数组slice（3，2）
array1.sort((a, b) => b - a);
console.log(array1);

//find
const array2 = [2, 4, 6, 8, 0];
const param = array2.find((item) => item === 1);
//找得到值就返回相应值，否则返回undefined
console.log(param);

const array = [[1, 2], 3, [3, 4, 5], [1, [3, 4, 5, 6]]];
array
  .flat()
  .flat()
  .flat()
  .filter((item) => item !== 3)
  .sort((a, b) => a - b)//化简后的逻辑
  .forEach((a) => console.log(a));
//打平、过滤、排序、输出
//连续使用必须保证上一次调用的返回值符合下一次调用函数的要求
