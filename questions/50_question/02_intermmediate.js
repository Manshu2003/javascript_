// 16. What’s the difference between parseInt and Number()?

// console.log(parseInt("10.252")); // 10
// console.log(Number("10.252")); // 10.252

// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// 18. Explain floating-point precision issues in JavaScript.

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false
// // dono questions ka answer same hai, floating-point precision issues ki wajah se 0.1 + 0.2 ka result 0.3 ke barabar nahi hota hai. JavaScript mein numbers ko binary floating-point format mein store kiya jata hai, jisse kuch decimal numbers accurately represent nahi ho pate hain. Is wajah se calculations mein chhoti inaccuracies aa jata hain.

// 19. How would you handle high-precision decimal math in JS?

// let a = Number((0.1+0.2).toFixed(2));
// console.log(typeof a); // number
// console.log(a); // 0.30

// 20. What is the difference between slice and splice?

// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(1, 4);
// let splicedArr = arr.splice(1, 3);
// console.log(arr); // [1, 5]

// console.log(slicedArr); // [2, 3, 4]
// console.log(splicedArr); // [2, 3, 4]

// slice() method returns a new array with a portion of the original array, while splice() method changes the original array by removing or replacing existing elements.

// 21. Create a function that reverse each word of a given sentence. E.g., Mai hun
// manshu → uhsnam nuh iam

// let word = "Mai hun manshu";
// let reversedName =word.split(" ").map((word)=>word.split("").reverse().join("")).join(" ");
// console.log(reversedName); // uhsnam nuh iam

// 22. In an array of numbers and strings, only add those numbers which are not strings.

// let arr = [1, 2, "3", 4, "5", 6];
// let sum = arr.reduce((acc, curr) => {
//   if (typeof curr === "number") {
//     return acc + curr;
//   }
//   return acc;
// }, 0);
// console.log(sum); // 13
// reduce() method is used to iterate through the array and check the type of each element. If the element is a number, it is added to the accumulator (acc). If it is a string, it is ignored. The final result is the sum of all numbers in the array.

// 23. How would you check if a number is an integer?

// let num = 10.5;
// if (Number.isInteger(num)) {
//   console.log(`${num} is an integer`);
// } else {
//   console.log(`${num} is not an integer`);
// }

// 24. Write a JavaScript function that reverse a number.

// let number =123456
// number = number.toString().split("").reverse().join("");
// console.log(number); // 654321

// 25. Write a javascript function that returns a passed string with letters in alphabetical order.

// let str = "javascript";
// let sortedstr= str.split("").sort().join("");
// console.log(sortedstr); // aacijprstv

// 26. Write a Javascript function that accepts a string as a parameter and conversts the first letter of each word of the string in upper case.

// let str = "javascript is a programming language";
// let capitalizedStr = str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// console.log(capitalizedStr); // Javascript Is A Programming Language

// 27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// function first(arr, n) {
//   if (!n) {
//     return arr[0];
//   } else if (n > arr.length) {
//     console.log("n is greater than the length of the array");
//   } else {
//     return arr.slice(0, n);
//   }
// }
// let results=first([2, 5, 3, 9], 2);
// console.log(results)

// 28. Write a javascript function to get the number of occurrences of each letter in specified string.

// let str = "javascript is a programming language";
// function countOccurrences(str) {
//   let occurrences = {};
//   str.split("").forEach((char) => {
//     if (occurrences.hasOwnProperty(char)) {
//       occurrences[char]++;
//     } else {
//       occurrences[char] = 1;
//     }
//   });
// for (let char in occurrences) {
//     console.log(`${char}: apka ${occurrences[char]} baar aaya hai`);
//   }
// }

// countOccurrences(str);

// 29. write a javascript program to find the most frequent item of an array.

// let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// function mostFrequent(arr) {
//   let frequency = {};
//   arr.forEach((item) => {
//     if (frequency.hasOwnProperty(item)) {
//       frequency[item]++;
//     } else {
//       frequency[item] = 1;
//     }
//   });

//   let maxFreq = Math.max(...Object.values(frequency));
//   let keyValueArr = Object.entries(frequency);
//   let filteredArray = keyValueArr.filter((entryArr) => {
//     return entryArr[1] === maxFreq;
//   });

//   console.log(filteredArray);
// }
// mostFrequent(arr);

// 30. write a javascript program to shuffle an array.

let arr = [1, 2, 3, 4, 5];
for (let ind in arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  [arr[ind], arr[randomIndex]] = [arr[randomIndex], arr[ind]];
}
console.log(arr);
 