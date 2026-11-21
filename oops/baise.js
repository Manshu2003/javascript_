// class Car{ 
//         fuel =100 
//          burnFuel(){
//              this.fuel -= 1
//            } 
//            start(){
//              this.burnFuel();
//         1     console.log('Car is starting')
//            }
//          }
// let buggati = new Car()
// buggati.start()
// console.log(buggati)

// class BankAccount{
//   #balance=100;
//   constructor(holderName,balance=100){
    
//     this.holdersName=holderName;
//     this.#balance=balance;
//   }
//   deposit(balance){
//     this.#balance +=balance;
//   }
//   setBalance(balance){
//     if(isNaN(balance)){
//       console.error("invalid balance")
//       return;
//     }
//     console.log("balance set successfully")
//     this.#balance=balance
//   }
//   getBalance(){
//     return this.#balance
//   }
// }
// let acc= new BankAccount("Manshu",1000)
// acc.setBalance(5000)
// console.log(acc.getBalance())

//Ingeritance -----

// class Car{
//  constructor(brand,color){
//    this.brand=brand;
//    this.color=color;
  
//  } 
//   start(){
//     console.log(this.brand,"is starting...")
//   }
//   stop(){
//     console.log(this.brand,"is stopping...")
//   }
// }
// class ELCar extends Car{
//   constructor(brand,color,battery){
//     super(brand,color)
//      this.batter=battery
//   }
//   charging(){
//     console.log(this.brand,"is chargin...")
//   }
// }
// let tesla= new ELCar("tesla","Red")
// tesla.start();
// tesla.stop();
// tesla.charging()
// console.log(tesla)

