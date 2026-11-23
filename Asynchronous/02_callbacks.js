// callback hamesa ek function hota hai
// callback wo function hota hai jisko ham as a argument pass kar rhe hote hai
// hod (higher order function) waisa function hota hai jo apne andar ek function(yani ki callback) le rha hota hai.

// example 1
// function hod(name, callback) {
//   callback(name);
// }

// function printName(name) {
//   console.log("Hello", name);
// }

// hod("Manshu", printName);

// example 2

// function calculate(num1, num2, callback) {
//   callback(num1, num2);
// }
// function sum(num1, num2) {
//   console.log("Addition is", num1 + num2);
// }
// function multiply(num1, num2) {
//   console.log("Multiplication is", num1 * num2);
// }

// calculate(5, 10, sum);
// calculate(5, 10, multiply);

// example 3 (async)

// console.log("1. fetching data");

// function fetechData(processData) {
//   setTimeout(() => {
//     console.log("2. data fetched");
//     processData();
//   }, 2000);
// }

// function processData() {
//   console.log("3. data processed");
// }

// fetechData(processData);

// console.log("4. other work is done");

// example 4 (async)

// function getData(data, callback) {
//   setTimeout(() => {
//     console.log(data);
//     if (callback) {
//       callback();
//     }
//   }, 3000);
// }
// console.log("fetching first data");
// getData("1st data", () => {
//   console.log("fetching 2nd data");
//   getData("2nd data", () => {
//     console.log("fetching 3rd data");
//     getData("3rd data", () => {
//       console.log("all data fetched");
//     });
//   });
// });


