// arrays  question ----------

//Q1. for an array with marks of students find the average marks of the entire class.

// let arr = [54, 68, 52, 64, 65];
// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// });
// let average = sum / arr.length;
// console.log(`Total sum of marks: ${sum}`);
// console.log(`Total average is : ${average}`);

// Q2. Create an array with the given length(n) and fill with 0.
// // let n = 25;
// let arr = new Array(25).fill(0)
// console.log(arr);

// Q3. Create an array with the given length(n) and store natural number from 1 to 0.

// let n = 25;
// let arr = new Array(25).fill(0)
// arr.forEach((e,i)=>{
//   arr[i]=i+1;
// })
// console.log(arr);

/*Q4. Consider an array od mcu heroes ([ironman,captain ,black window,wnada,hulk,black panther]).
Now:
a) Add spiderman at the end thoe at the start.
b) Remove black Window and add hawkeys in its place.
c) Check whether caption is present in the array.
*/
// let arr = [
//   "ironman",
//   "caption",
//   " blackwindow",
//   "wnada",
//   "hulk",
//   "blackpanther",
// ];
// arr.push("spiderman");
// arr.unshift("thor");
// arr.splice(3, 1, "hawkeys");
// console.log(arr);
// console.log(arr.includes("caption"));

//Q5. how to check if given thing is array or not? How to convert other datatypes to array? whar if we try to convert an object into an array?

// let a="svhba"
// console.log(Array.isArray(a));
// console.log(Array.from(a));
 