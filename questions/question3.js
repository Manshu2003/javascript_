// Q1. A website gives discount based on the total shopping cart amount,

/*let cartValue=120;
let finalcartValue;

if(cartValue <50){
 finalcartValue = cartValue;
 console.log("No discount applied.");
}else if(cartValue >=50 && cartValue <=100){
 finalcartValue = cartValue - (cartValue * 0.1);
 console.log("10% discount applied.");
}else{
    finalcartValue = cartValue - (cartValue * 0.2);
    console.log("A 20% discount has been applied.");
    
}
console.log(`The final cart total is $${finalcartValue.toFixed(2)},`);

*/

let hasSubscription = true;
let subscriptionCost = "premium";

if(hasSubscription){
if(subscriptionCost === "premium"){
 console.log("You have access to all content.");
}else if(subscriptionCost === "basic"){
    console.log("You have access to basic content.");
}else{
    console.log("You have access to limited content.");}

}else{
    console.log("Please subscribe to access content.");
    
}

