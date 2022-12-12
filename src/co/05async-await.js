function p1() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("钻石1");
    }, 3000)
  );
}
function p2() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("钻石2");
    }, 3000)
  );
}
function p3() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("钻石3");
    }, 3000)
  );
}

async function diamonds(){
    const diamonds1 = await p1()
    console.log(diamonds1)
    const diamonds2 = await p2()
    console.log(diamonds2)
    const diamonds3 = await p3()
    console.log(diamonds3)
}

diamonds()