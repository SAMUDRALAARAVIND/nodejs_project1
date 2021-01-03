var express = require("express");
const bodyParser = require("body-parser")
const { json } = require("body-parser");
var app =express();
var mysql = require("mysql");
app.set("views", "views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(8000, () => {
    console.log(`Server started on 8000`);
});

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Indian@123",
    database:"aravind"
});
app.get("/ajax/testing/",function(req,resp){
    resp.render("test");
});
app.post("/ajax/testing/",function(req,resp){
    connection.connect();
    var query = "SELECT * FROM students WHERE firstname = 'aravind' AND lastname='samudrala';";
    connection.query(query,function(err,result){
        if(err) throw err;
        var obj ={responseResult:result}
        resp.send(result);
    });
})