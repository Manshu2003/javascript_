// Q1. Calculate sum of frist 'n' numbers.
/*
let user = 2;
let sum = 0;
for (let i = 1; i <= user; i++) {
  sum += i;
  // console.log(sum);
}
console.log("sum", sum);
*/
//Q2. Calculate the sum of number from 'm' to 'n'.
/*
let user1 = 2;
let user2 = 7;
let sum1 = 0;
for (let i = user1; i <= user2; i++) {
  sum1 += i;
  // console.log(sum);
}
console.log("sum", sum1);
*/
//Q3. Print all odd number from 0 to 'n'.
/*
for (i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
*/
//Q4. Create a "Number Knock" game.(ask the user to keep guessing the number until the user enters correct guess).
/*
let number = 5;
let guess;
guess = prompt("Guess the number between 1 to 10");
while (guess != number) {
  guess = prompt("Guess the number between 1 to 10");
}
console.log("Correct guess!");
*/
//Q5. Simple Password Checker(Fixed Attempts).
/*
let password = "abcd";
let noofattempt = 0;
let userpassword = null;
while (password !== userpassword && noofattempt < 3) {
  userpassword = prompt("Enter your password:");
  noofattempt++;
  if (userpassword === password) {
    alert("congratuation");
  } else if (noofattempt >= 3) {
    alert("Time hi over,byy");
  } else {
    alert("wrong password");
  }
}
*/
//Q6. Create to program to find the factorial of 'n'.
/*
 let n=5;
 let fact=1;
 for(i=1;i<=n;i++){
    fact *=i;
 }
 console.log("factorial =",fact);
*/
//Q7. print the following pattern.(build it for nth numbers)

let n = 5;
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}
