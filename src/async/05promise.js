const diamonds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("钻石1");
  }, 2000);
});

diamonds.then((value) => {
    console.log(value)
    const diamonds = new Promise((resolve, reject) => {
        setTimeout(() => {
        //    resolve("钻石2");
        }, 2000);
      });
    return diamonds
}).then((value) => {
    console.log(value)
    const diamonds = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("钻石3");
        }, 2000);
      });
    return diamonds
}).then((value) => {
    console.log(value)
    const diamonds = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("钻石4");
        }, 2000);
      });
    return diamonds
}).then((value) => {
    console.log(value)
    const diamonds = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("钻石5");
        }, 2000);
      });
    return diamonds
}).then((value) => {
    console.log(value)
    const diamonds = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("钻石6");
        }, 2000);
      });
    return diamonds
}).catch(console.log(1))
