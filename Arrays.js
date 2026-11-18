// let colors = ["red", "green", "blue", "yellow", "purple"];
// let marks = [90, 85, 78, 92, 88];
// let personDetails = ["John", 25, "Engineer", "New York"];

// console.log(colors, "\n", marks, "\n", personDetails);

// let fruits = ["mango", "litchi", "apple"];

// let test = fruits.join(" And ");
// console.log(fruits);
// console.log(test, typeof test);

//# sort methon

// let arr = [50, 5, 40, 3];
// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr);

//#map function

// let mp = [1, 82, 9, 18, 2];
// let newarr = mp.map((elem) => {
//   return elem * 2;
// });
// console.log("originial array", mp);
// console.log("New array", newarr);

// #forEach function

// let mp = [1, 82, 9, 18, 2];
// mp.forEach((elem, index) => {
//   mp[index] = elem * 3;
// });
// console.log(mp);

// #filter function

// let user = [10, 5, 3, 56, 2];
// let newuser = user.filter((e) => {
//   return e % 2 === 0;
// });
// console.log(user);
// console.log(newuser);


// #Reduce function

let user = [10, 5, 3, 56, 2];
let newuser=user.reduce((e,f)=>{
    return e+f;
})
console.log(newuser);

