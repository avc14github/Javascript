// truthy & falsy value

username = [];

if (username) {
  console.log("username provided");
}

// falsy value

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value

// "0" , "false" , " <space> " , [] , {} , function(){}

if (username.length === 0) {
  console.log(`username array is empty`);
}

userObj = {};
if (Object.keys(userObj).length === 0) {
  console.log(`userObj is empty`);
}

// Nullish Coalescing operator (??):null undefined

let val1;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 15;
val4 = undefined ?? 10 ?? 20;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// ternary operator

// condition ? true : false

const ice = 100;

ice >= 100
  ? console.log(`greater than 100 or eq 100`)
  : console.log(`less than 100`);
