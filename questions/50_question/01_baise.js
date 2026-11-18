// 1. Create a function that returns the last element of an array.
/*
function getlastElement(array) {
  return array[array.length - 1];
}
let arr = [1, 2, 3, 4, 5];
let lstelement = getlastElement(arr);
console.log("The last element of the array is: ", lstelement);
*/

// 2. Find the combination of two arrays.

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let combinedArray = array1.concat(array2);
// console.log("The combined array is: ", combinedArray);

//3. Generate a random integer between 0 to 18.

// let randomInteger = Math.floor(Math.random() * 19);
// console.log("The random integer between 0 to 18 is: ", randomInteger);

//4. Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.

// let arr = [1, "hello", 2, "world", 3, "javascript"];

// let stringValues = arr.filter((item) => {
//   return typeof item === "string";
// });
// console.log("The new array containing only string values is: ", stringValues);

// 5. Find the maximum number in an array.

// let numbers = [1, 5, 3, 9, 2, 25, 10, 15, 20];
// let maxNumber = Math.max(...numbers);
// console.log("The maximum number in the array is: ", maxNumber);

// 6. Write a function that returns the length of a given object (number of keys).

// let obj = {
//   name: "Manshu",
//   age: 23,
//   city: "Delhi",
//   country: "India",
//   mobile: 1234567890,
//   profession: "Software Engineer",
//   isMarried: false,
// };
// let objectLength = (o) => {
//   return Object.keys(o).length;
// };
// console.log("The length of the object is: ", objectLength(obj));

// 7. In an array of objects filter out those objects which have gender's value male.

// let arrayOfObjects = [
//   { name: "Manshu", gender: "male" },
//   { name: "Bob", gender: "female" },
//   { name: "Jhon", gender: "male" },
//   { name: "Alice", gender: "female" },
// ];
// let filteredObjects = arrayOfObjects.filter((item) => {
//   return item.gender === "male";
// });
// console.log("The filtered objects with gender 'male' are: ", filteredObjects);

// 8. Given an array of strings, return a new array where all strings are in uppercase.

// let arrayOfStrings = ["hello", "world", "javascript", "programming"];
// let upperCaseStrings = arrayOfStrings.map((e)=>{
//   return e.toUpperCase();
// })
// console.log("The new array with all strings in uppercase is: ", upperCaseStrings);

// 9. Check if an object is empty (has no keys).

// let obj = {
//   name: "Manshu",
//   age: 23,
//   city: "Delhi",
// };
// let isEmpty = Object.keys(obj).length < 1;
// if (isEmpty) {
//   console.log("The object is empty.");
// } else {
//   console.log("The object is not empty.");
// }

// 10. Create an array of numbers and double each value using .map().

// let arrayOfNumbers = [1, 2, 3, 4, 5];
// let doubledNumbers =arrayOfNumbers.map((num) => {
//   return num * 2;
// });
// console.log("The new array with doubled values is: ", doubledNumbers);

// 11. Convert an array of strings into a single comma-separated string.

// let arrayOfStrings = ["hello", "world", "javascript", "programming"];
// let commaSeparatedString = arrayOfStrings.join(', ');
// console.log("The single comma-separated string is: ", commaSeparatedString);

// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

// let arr = [1, [2, 3], 4];
// let flattenedArray = arr.flat();
// console.log("The flattened array is: ", flattenedArray);

// 13. Write a function that checks if all elements in an array are numbers.

let array = [1, 2, 3, "a", 4, 5];
let allNumbers = array.every((item) => typeof item === "number");
console.log("Are all elements in the array numbers? ", allNumbers);
// every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. In this case, it checks if every element in the array is of type "number". If all elements are numbers, it will return true; otherwise, it will return false.

// 14. Build a simple isPrime() function to check if a number is prime.

// function isPrime(num) {
// if(num === 0 || num === 1){
//   return false;
// }
// for (let i = 2; i <= Math.sqrt(num); i++) {
//   if (num % i === 0) {
//     return false;
//   }
// }
// return true;
// }
// console.log("Is 7 a prime number? ", isPrime(7)); // true
// console.log("Is 10 a prime number? ", isPrime(10)); // false

// 15. Create a function that removes duplicate values from an array.

let arrWithDuplicates = [1, 2, 3, 2, 4, 1, 5, 3];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(
  "The array after removing duplicates is: ",
  removeDuplicates(arrWithDuplicates),
);
