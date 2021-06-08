//arithmetic operators:
var a=10,b=20,c= 90,d="10",e="100s";
/*console.log(a+b);
console.log(a-b);     //if we get string on that is as its
console.log(a*b);
console.log(a/b);
console.log(a%b);*/
/*
console.log(a++);// print 10 10+1 -> 11 -> a=11
console.log(++a);// 11 + 1 -> a=12
console.log(a--); // 12-1 -> a=11
console.log(--a);//11-1 -> a=10 print 10*/

/*console.log(d+a+b+c); //10209010

//e=d+a+b+c;
//console.log(typeof e);
console.log(a+b+d+c);//301090
console.log(d+a+b+c);//10102090
console.log(a+b+d+c);//301090
console.log((d+a)+b+c);//10102090
console.log((a+b)+d+c);//301090
console.log(a-d);//0
console.log(a*d);//100
console.log(a+e);//10100s
console.log(a-e);// nan(not a number)*/


// >,<,>=,<=,==,?:
/*var a=10,b=20,c="10";
console.log(a>b);//false
console.log(a<b);//true
console.log(a == c);//true
console.log(a === c);//false
console.log(a>=c);//true
console.log(a<=c);//true

var res=a<b ? "a is less b" : "a is greater b";
console.log(res); // ais less b*/
var a=100,b=200,c=300;

console.log(a<b && b<c); // true
console.log(a > b && b < c); // false
console.log(a > b || b < c); // true 
console.log(a < b || b > c); // true 
console.log(!(!(a>b))); // false


