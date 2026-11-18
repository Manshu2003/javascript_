// object question---------------------

// Q1.Create a person object with properties:name, age, and city.Then
// a) Log each property as: Value of "name" Proprty is "manshu" using loop.
// b) Add n new property callled email to the person object.
// c) Delete "City" property from person object.

// let person = {
//   name: "Manshu",
//   age: 23,
//   city: "Delhi",
// };
// person.email = "manshuchauhdari499@gmail.com";
// delete person.city;
// for (let key in person) {
//   console.log(`Value of ${key} is ${person[key]}`);
// }

//Q2.Create a function that takes an object with firstname,middlename,lastname properties and returns the full name.

// let users = {
//   firstname: "Manshu",
//   middlename: "Chaudhary",
//   lastname: "Jaiswal",
// };
// let fullnames = (u) => {
//   console.log(`${u.firstname} ${u.middlename} ${u.lastname}`);
// };
// fullnames(users);

//Q3.Write a function that takes object and returns the number of properties in an object.

// let obj={
//   firstname: "Manshu",
//   middlename: "Chaudhary",
//   lastname: "Jaiswal",
// }
// let keys=Object.keys(obj).length;
// console.log(keys);

//Q4.write a function that returns am array of names of users who have the role "admin".

const users = [
  { name: "Manshu", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Jhon", role: "admin" },
];

let filleredItem = users.filter((item) => {
  return item.role === "admin";
});
let resultsArray = filleredItem.map((i) => {
  return i.name;
});
console.log(resultsArray);
