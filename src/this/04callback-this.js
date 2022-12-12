//回调函数场景
//回调函数的内部不是我们调用的
const obj = {
  name: "zhangwei",
  gitname() {
    console.log(this.name);
  },
  test: function () {
    setTimeout(function namer() {
      console.log(this.name);
    }, 1000);
  },
  test1: function () {
    setTimeout(() => console.log(this.name), 1000);
  },//回调函数用箭头函数，不会导致this指向问题
  test3: function () {
    setTimeout(
      function namer() {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};

obj.test();//undefined
obj.test1();//zhangwei
obj.test3();//zhangwei
