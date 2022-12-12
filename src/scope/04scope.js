//作用域 作用域链
//全局作用域
//函数作用域
//es2015 es6 块作用域
//with eval


//var let const
//var 变量提升 允许先使用再声明


//() {} + let或者const关键字 关键字所在scope变成块级作用域
//let const不能进行变量提升 可能会出现暂时性死区
// function test () {
//     console.log(name)
//     const name = "zhangwei"
// }
// test()
//报错，因为出现了暂时性死区

//作用域链，作用域内用到却没定义的变量会向父级查找