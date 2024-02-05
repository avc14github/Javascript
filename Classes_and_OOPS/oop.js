// object literal

const user = {
  username: "nepali",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`is user signedin ${this.signedIn}`);
    console.log(this);
  },
};

// console.log(user.username);

// user.getUserDetails()

// console.log(this);   //we get window object in browser

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greet = function () {
    console.log("hello");
  };

  return this;
}

const userOne = User("david", 9, true);
const userTwo = User("Jay", 7, false);
console.log(userOne); //value of userOne gets overwrite

// new Keyword - constructor function - gives new instance every time
const userThree = new User("david", 9, true);
const userFour = new User("Jay", 7, false);
console.log(userOne);

// step 1 - new object get created

// step 2 - constructor function get called due to new keyword

// step 3 - this keyword injects arguments into the new object instance

// step 4 - get properties and methods in new object

// *** instanceof JS - search
