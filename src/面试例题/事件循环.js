setTimeout(() => {
  console.log("set1");

  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2");
  });
});

new Promise((resolve) => {
  console.log("pr1");
  resolve();
}).then(() => console.log("then1"));

setTimeout(() => {
  console.log("then1");
});

setTimeout(() => {
  console.log("set2");
});

console.log(2);

queueMicrotask(() => {
  console.log("queueMicrotask1");
});//在微任务队列添加任务，不是定义函数

new Promise((resolve) => {
  resolve();
}).then(() => console.log("then3"));
