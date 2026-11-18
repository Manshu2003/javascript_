let x= 10;
let y = 5;
let z = "10";

x +=y*2;
let isEqual = x === z;
let isStrictEqual = x === z;
let logicTest =(isEqual || isStrictEqual) && !(y > 10);

let result = logicTest ? ++x : --y;

console.log("The value of x is: ",  x);
console.log("The value of y is: ",  y);
console.log("The value of z is: ",  z);
console.log("isEqual: ", isEqual);
console.log("isStrictEqual: ", isStrictEqual);
console.log("logicTest: ", logicTest);
console.log("result: ", result);
console.log("Type of z: ", typeof z);