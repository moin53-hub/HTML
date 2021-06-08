/*function f1() {
    console.log(a);
    var a = 10;
}
f1();*/





/*function f1() {
    var a,b;
    console.log(a);
    a=100;
    b=20;
    console.log(b);
}
f1();*/

/*console.log(a);
var a = 900;
console.log(a);
var b = 100;
console.log(b);


function f1() {
    console.log(a);
    var a = 0;
    console.log(a);
}
f1();*/


var a = 10;  //numbere data type
console.log(a);
console.log(typeof a);
var rating=4.5;
console.log(typeof rating);

//boolean data type
var isDone=false;
console.log(isDone);
//if isDone=1 then number
console.log(typeof isDone);

//string data type
var str="hello!";
console.log(str);
console.log(typeof str);
console.log(str.toUpperCase());

//array data type
var arr=[100,200,300,400,500];
console.log(arr);
console.log(arr[1]);
console.log(arr[4]);
//console.log(arr[5]);
arr.push(600);
console.log(arr);

// object data type
var obj={
    name:"shaikmoin",
    adress:"hyderabad",
    pincode:500001,
    salary:9000.10,
    technologies:["javascript","dotnet","python"],
    company:{
        name:"abc",
        location:"hyd"
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.company);
console.log(obj.company.location);


