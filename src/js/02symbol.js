const unique = Symbol('name');
const unique2 = Symbol('city')
console.log(unique)

const speak = Symbol();
class Person {
    [speak]() {
        
    }
}//因为使用者无法在外部创建出一个相同的 speak，所以就无法调用该方法

// 打标
// 网络请求拦截器
// {
//     name: 'pjw',
//     id: '1234567'
// }

// const traceId = Symbol('traceId')
// {
//     [traceId]:'2345678',
// }