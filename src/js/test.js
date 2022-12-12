// const obj = {
//     name : "zw",
//     age : 20,
//     university: "ujs"
// }

// //·Object.freeze(obj)

// obj.name = "zcy"
// console.log(obj.name)

// function a(){
//     console.log('a')
// }

// function b(){
//     console.log('a')
// }

// function c(){
//     console.log('a')
// }

// const array=[a,b,c]

// console.log(array)

const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

const mypromise = new Promise((resolve, reject) => {
  resolve("hhh");
});

mypromise
  .then((value) => {
    console.log(value);
  })
  .finally(() => console.log("h"));

const apromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("钻石");
  }, 1000);
});

apromise
  .then((value) => {
    console.log(value);
    const bpromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("a");
      }, 1000);
    });
    return bpromise;
  })
  .then((res) => {
    console.log(res);
    return 1;
  })
  .then((res) => {
    console.log(res);
  })
  .finally(() => console.log("finally"));
