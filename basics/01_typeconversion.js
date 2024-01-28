let score = false;

let stringScore = String(score);
// console.log(stringScore, typeof stringScore);

/* operator  */

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null == 0);
// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);  // comparision operator converts null to 0
// console.log(null <= 0);

// console.log(undefined == 0);
// console.log(undefined > 0); // comparision operator does not convert undefined
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);

function hello() {
  console.log("hello world");
  return;
}

// hello();

let x = 123n;
// console.log(x, typeof x);

let num = Math.random() * 6;
// console.log(num);

let myDate = new Date(2023, 2, 29, 23, 23, 56); // date object

// console.log(myDate); // date and time in milliseconds
// console.log(myDate.toString()); // date to string Mon Jan 01 2024 18:39:29 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //date to date string - removes time Mon Jan 01 2024
// console.log(myDate.toLocaleString()); // converts to DD/MM/YYYY HH:MM:SS AM/PM format 1/1/2024, 6:39:29 pm

let date = Date.now(); //current date time in milliseconds
console.log(date);

console.log("b" + "a" + +"a" + "a");
