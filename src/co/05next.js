const { co } = require("co");

function *nextExample() {
  yield 1;
  const result2 = yield 2;
  yield result2;
  yield 4;
}

const a = nextExample()
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next(100).value)
console.log(a.next().value)
