/*var i = 1;
while (i<=20){
    console.log(i);
    i++;
}*/


/*
var users=["moin","tanveer","riyaz","sahoo"];
index = 0;

while(index < users.length){
    console.log(users[index]);
    index++;
}*/

var users=[
    {
        name:"moin",
        age:20
    },
    {
        name:"tanveer",
        age:21
    },
    {
        name:"riyaz",
        age:22
    },
]
var index=0;
while(index<users.length){
    console.log(users[index].name +"\t"+users[index].age);
    index++;
}

