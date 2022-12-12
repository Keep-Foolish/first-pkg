// function* creatGenerator() {
//   console.log("a");
//   yield (b = new Promise((resolve, reject) => resolve(1)));
//   console.log(b);
//   yield (c = 2);
//   console.log(c);
//   yield console.log("b");
//   yield 1
//   yield 2
// }

// const generator = creatGenerator();
// generator.next();
// generator.next();
// generator.next();


//用迭代器代替promise
function* createDiamonds() {
    const diamonds1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("钻石1")
        }, 2000);
    })
    yield diamonds1
    const diamonds2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("钻石2")
        }, 4000);
    })
    yield diamonds2
    const diamonds3 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("钻石3")
        }, 6000);
    })
    yield diamonds3
}

const diamonds = createDiamonds()
const r1 = diamonds.next().value
const r2 = diamonds.next().value
const r3 = diamonds.next().value
r1.then((value) => {console.log(value)})
r2.then((value) => {console.log(value)})
r3.then((value) => {console.log(value)})