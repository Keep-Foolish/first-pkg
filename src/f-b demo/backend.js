//平台后端接口 写在本地时将本地当作服务器
const http = require("http");

http.createServer(function (req,res) {
    res.write("hello world");
    res.end();
}).listen(8080);
