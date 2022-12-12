const anyString = "I have a cat.";
const a = anyString.indexOf("cat");
console.log(a);
if (anyString.indexOf("dog")) {
  console.log("I have a dog.");
}
//如果没有找到就返回-1，会被判断为true
//所以用来判断字符串中是否存在目标元素用includes

console.log(anyString.includes("cat"));
const stringNo = "I seldom use wechat.";
const reg = /Wechat/g;
//正泽表达式，很少用，使用场景类似：用户输入手机号位数是否正确
console.log(stringNo.toLocaleLowerCase().match(reg));

//splice、slice
//js中数组和字符串的转换很方便
const str = "1234567890";
console.log(str.split(" "));
console.log(str.split(" ").join("?"));

//将url解析成对象
const url =
  "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=gdvue&oq=gdog&rsv_pq=cc4f0558001be7fa&rsv_t=903doC9Q6BVrnyosQ%2BauUQrleJqf9La6jfe2z0meYkRidD4zIaBKGobO6yI&rqlang=cn&rsv_dl=tb&rsv_enter=1&rsv_sug3=6&rsv_sug1=5&rsv_sug7=100&rsv_sug2=0&rsv_btype=t&inputT=917&rsv_sug4=1620";
const urlDivid = url.split("?");
console.log(urlDivid);
const urlDivider = urlDivid[1].split("&");
console.log(urlDivider);
const urlset = [];
// const keyValue = urlDivider.forEach((item) => item.split("="))
// console.log(keyValue)
for (let i = 0; i < urlDivider.length; i++) {
  urlset[i] = urlDivider[i].split("=");
}
console.log(urlset);
const urlObj = {};
for (let i = 0; i < urlset.length; i++) {
  urlObj[urlset[i][0]] = urlset[i][1];
}
console.log(urlObj);

//函数式
const url2 =
  "https://www.baidu.com/s?wd=vue&rsv_spt=1&rsv_iqid=0xa5d93f9e0009e6e3&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=4&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=vue&rsp=8&inputT=706&rsv_sug4=7723";

function urlParser(url2) {
  const resultSet = {};
  url2
    .split("?")[1]
    .split("&")
    .forEach((str) => {
      const pair = str.split("=");
      resultSet[pair[0]] = pair[1];
    });
  return resultSet;
}
console.log(urlParser(url2));
