
//primitive datatypes
a = "SECE";
console.log(typeof(a));

b = true;
console.log(b);
//type of datatype
console.log(typeof(b)); 

//secondary datatypes
array = [1,2,"sece",[10,20],true,'a'];
console.log(array);
console.log(typeof(array)); 

//Object

//waay 1
obj = {
    firstname: "Sri",
    lastname : "Eshwar"
}

console.log(obj);
console.log(typeof(obj));
console.log(obj.firstname);
console.log(obj['firstname']);//single or double quotes 

//way 2
obj1 = {};
console.log(obj1);
obj1["dept"] = "CSE";
obj1["section"] = "A"; 

//way 3
obj2 = new Object();
console.log(obj2);
obj2.count = 70;
obj2["absentees"] = 1;  

//Set with output
set = new Set("hello",1,2,"SECE");//Set(4) { 'h', 'e', 'l', 'o' }
set = new Set(["hello",1,2,"SECE"]);//Set(4) { 'hello', 1, 2, 'SECE' }
set = new Set(("hello",1,2,"SECE"));//Set(3) { 'S', 'E', 'C' }
//set = new Set(("hello",1,2,"SECE",44));//TypeError: number 44 is not iterable
set = new Set(["hello",1,2,"SECE","44",2,"hello","SECE"]);//Set(5) { 'hello', 1, 2, 'SECE', '44' }

console.log(set);
console.log(typeof(set));

//method 1
for (const item of set) {
    console.log(item); 
  }

//method 2
const arrayFormat = [...set];
console.log(arrayFormat[3]);

//method 3
const iterator = set.values();
console.log(iterator.next().value); 
