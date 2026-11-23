// A Promise is a special object in javascript that represents a task that will finish in the future.
// It can be in one of three states: pending, fulfilled, or rejected.
// A Promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function and it takes two parameters: resolve and reject. The resolve function is called when the task is completed successfully, while the reject function is called when the task fails.

// example 1

// console.log("Example 1: Promise with resolve and reject");
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise resolved successfully");
//   }, 2000);
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// example 2

// console.log("Example 2: Promise with reject");
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise rejected");
//   }, 2000);
// });

// promise2
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// example 3

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetching data 1...");

//       resolve({
//         name: "John Doe",
//       });
//     }, 3000);
//   });
// }

// function fetchData2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetching data 2...");
//       resolve({
//         company: "ABC Inc.",
//       });
//     }, 3000);
//   });
// }
// let promise3 = fetchData();
// console.log("started fetching data.... ");
// promise3
//   .then((result) => {
//     console.log("Result from fetchData:", result);
//     return fetchData2();
//   })
//   .then((result) => console.log("Result from fetchData2:", result))
//   .catch((error) => console.log(error));

// let response = fetch('https://jsonplaceholder.typicode.com/users');
// response
//     .then(data => {
//         console.log(data)
//         return fetch('https://jsonplaceholder.typicode.com/users');
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err)
//     })
