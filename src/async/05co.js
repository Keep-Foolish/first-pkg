const co = require("co");
function* createDiamonds() {
  yield diamonds1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("钻石1");
    }, 2000);
  }).then((value) => console.log(value))
  yield diamonds2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("钻石2");
    }, 2000);
  }).then((value) => console.log(value))
  yield diamonds3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("钻石3");
    }, 2000);
  }).then((value) => console.log(value))
}

// co(createDiamonds()).then(function (value) {
//   console.log(value);
// });
co(createDiamonds).then(() => console.log("函数执行结束"))
