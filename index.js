var test = {
    "get":{"get1":func1,"get2":func2},
    "post":func2
}
function func1(){
    console.log("This is function 1");
}
function func2(){
    console.log("This is function 2");
}
test.get.get1();
test.get.get2();
test.post();