var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  mysql = require("./db/db.js")
;
var app = express();
var sql = "SELECT * FROM teacher";
//应用中间件 body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//静态资源目录
app.use(express.static(path.join(__dirname,'./static')));
//404
app.use(function (req,res) {
  res.sendFile(path.join(__dirname,'./static/error.html'));
});
//监听端口，返回监听状态
app.listen(3000, function (err) {
  if(err) throw err;
  console.log("SEVER STARTED AT LOCALHOST:%d",3000);
});


