// control flow statement
// < , > ,<= , >= , == ,!= ,=== ,!==

if (/* true */ 2 == 2) {
  console.log(`condition is true`);
} else {
  console.log(`condition is false`);
}

const name = "rakesh";
if (name == "rakesh") console.log(`user is rakesh`);
else console.log("user is not rakesh");

/* 
if (name =="rakesh") console.log('user is rakesh') , 
console.log("he is logged in") 
*/

price = 5000;

if (price <= 200) {
  console.log(`price less than or equal to 200`);
} else if (price <= 300) {
  console.log("price less than or equal to 300");
} else if (price <= 400) {
  console.log("price less than or equal to 400");
} else if (price <= 500) {
  console.log("price less than or equal to 500");
} else {
  console.log("price is greater than 500");
}

const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = true;
const loggedInFromYahoo = true;

if (userLoggedIn && debitCard) {
  console.log("user is logged in and can buy course");
}

if (loggedInFromGoogle || loggedInFromYahoo) {
  console.log("user is logged in either with google or yahoo");
}
