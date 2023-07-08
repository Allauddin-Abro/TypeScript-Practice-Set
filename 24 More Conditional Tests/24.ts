// String Test
let day:string="Sunday";
console.log(day=='Sunday');
console.log(day!=='Sunday');
console.log("\n______________\n")


// Lowercase Test
let month:string="July";
console.log(month.toLowerCase()=="July");
console.log("\n______________\n")

// Numerical Tests
let num:number=5;
console.log(num==4);
console.log(num!==4);
console.log(num<4);
console.log(num>4);
console.log(num<=4);
console.log(num>=4);
console.log("\n______________\n")

// AND and OR Operator Tests
let val:number=5;
console.log(num>4 && num<10);
console.log(num>4 || num==5);
console.log("\n______________\n")


// Test item is or not in array
let items:string[]=["Apple","Banana","Orange","Peach"];
console.log(items.indexOf("Banana")!==-1);
console.log(items.indexOf("Mango")!==-1);
console.log("\n______________\n")
