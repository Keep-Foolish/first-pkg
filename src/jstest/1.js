foo()
function foo(){
    console.log(a)
    var a = 2
}

//闭包
var fn;
function foo() {
    var a = 2
    function baz() {
        console.log(a)
    }
    fn = baz;
}

function bar(){
    fn();//这里构成闭包
}

foo()
bar()//2


for(var i = 1; i <= 5; i++){
    setTimeout(function timer() {
        console.log(i);
    },i*1000)
}//每秒输出一次6