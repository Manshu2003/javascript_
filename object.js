// let user = {
//   name: "Manshu",
//   color: "red",
//   speed: 120,
//   stop: () => {
//     return "Hey, How are you:";
//   },
//   start: () => {
//     return "Mei theek hu.";
//   },
// };

// console.log(user["stop"]());
// console.log(user["name"]);
// console.log(user["start"]());

// let key=Object.keys(user)
// console.log(key);

// let values=Object.values(user)
// console.log(values);

// let enty=Object.entries(user)
// console.log(enty);

// for (let test in user) {
//   console.log(test);
// }

let obj = {
  name: "mks",
  city: "ohoho",
  age:23
};
// let name = obj.name;
// let city = obj.city;

let { name, city,age } = obj;
console.log(name, city,age);
