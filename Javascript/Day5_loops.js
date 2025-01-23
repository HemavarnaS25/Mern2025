/*
Two kinds of looping
1.Normal looping
->for
->while
->do...while
2.Advanced looping
->for in
->for of
->for each
*/

var a = [10,20,30];

var obj = {
    "firstname":"Sri",
    "lastName": "Eshwar",
    "dept" : "CSEA",
    "count" : 70
};
/*

for (let val in a) {
    console.log(val);
}

for (let key in obj) {
    console.log(key,":",obj.key);//undefined
}
for (let key in obj) {
    console.log(key,":",obj[key]);
}

set = new Set(["hello",1,2,"SECE","44",2,"hello","SECE"]);
for (let val in set) {
    console.log("loop is running")
    console.log(val);
} */

//for of loop
for(let i of a){
    console.log(i);
}

//if try to use simple for of loop it will sow error as object is not iterable
//print keys
for (let i of Object.keys(obj)) {
    console.log(i);
}

//print values
for (let i of Object.values(obj)) {
    console.log(i);
}

//print both keys and values
for (let [i,j] of Object.entries(obj)) {
    console.log(i,j);
}