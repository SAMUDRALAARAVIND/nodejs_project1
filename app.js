const express = require("express");
const app=express();
const mysql = require("mysql");
const bodyParser = require("body-parser")
const port = 4000;
const { json } = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', 'views');
app.set('view engine', 'ejs');
app.get("/",(req,resp)=>{
    resp.render("index");
});
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Indian@123",
    database:"aravind"
});
app.post('/home', (req, res) => {
    let user=req.body;
    var query = `INSERT INTO students VALUES('${user.roll}','${user.firstname}','${user.lastname}','${user.email}')`;
    connection.connect();
    connection.query(query);
    res.send("data added successfully");
});
