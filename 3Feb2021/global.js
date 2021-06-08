/*const { compileFunction } = require("vm");

var a = 100;  //Global Variables
var b = 200;

/*console.log(a); //100
console.log(b);  //200

function f1() {
    console.log(a); //  eferring global variables of a  //100
    console.log(b); //   eferring global variables of b  //200
    
    a = 10;
    b = 0;
    
}
f1();
console.log(a);
console.log(b);*/

/*function f1() {
    a = 10;
    b = 0;
}

function f2() {
    console.log(a);  //10   
    console.log(b);  //0
}
f1();   
f2();*/

var a = 100;  //global Variables
var b = 200;

function f1() {
    a= 30; // loval variables
    b=90;
    console.log(a);//30
    console.log(b);//90
    a= 0;
    b=0;
}
f1();
console.log(a);//0
console.log(b);//0