const co = require("co");
function* createDiamonds() {
  const diamonds1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("钻石1");
    }, 2000);
  });
  yield diamonds1;
  const diamonds2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("钻石2");
    }, 4000);
  });
  yield diamonds2;
  const diamonds3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("钻石3");
    }, 6000);
  });
  yield diamonds3;
}

// co(createDiamonds()).then(function (value) {
//   console.log(value);
// });
co(createDiamonds())
