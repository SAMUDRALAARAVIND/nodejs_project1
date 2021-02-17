const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");
var port = process.env.port  || 8080;
app.set("views","views");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
app.get("/",(req,resp)=>{
  resp.render("test");
})
app.get("/angular/",function(req,resp){
  resp.render("angle");
});

app.post("/angular/",function(req,resp){
  console.log("requested the server");
  connection.query(`SELECT * FROM bank_branches WHERE state='telangana' LIMIT 5;`,function(err,result){
    if(err) throw err;
     resp.send(result);
     console.log(result);
  });
});

app.post("/",(req,resp)=>{
    var state = req.body.state;
    var searchItem = req.body.searchItem;
    var sql = `SELECT bank_name FROM bank_branches WHERE state='${state}' and bank_name REGEXP '^[${searchItem}]' limit 2;`;
    connection.query(sql,function(err,result){
      if(err) throw err;
      console.log(`result is ${JSON.stringify(result)} and the type of result is ${typeof(result)}`);
      resp.send(JSON.stringify(result));
    });
});
app.get("/api/branches/autocomplete",function(req,resp){
    var object = JSON.stringify(req.query);
    resp.render("search",{x:object});
});




// host:"b74k0s8ewoitjlz66apj-postgresql.services.clever-cloud.com",
//   user:"uadrje84dlumvndov34z",
//   password:"tqqAlRTodDtVfRI1ljAK",
//   database:"b74k0s8ewoitjlz66apj",
//   port:5432
//  C:/Users/Aravind/OneDrive/Desktop/ermin-admin/fyle-project/indian_banks.sql
