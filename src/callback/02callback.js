//callback函数
//本地要做的 定义平台函数需要的参数
function callback(msg){
    console.log(msg);
}

const param = {
    callback,
}

//平台实现原理
function handle(param){
    param.callback("这是一个回调函数")
}

//实际传参
handle(param)


