// arrow function

const user = {
  username: "peter",
  price: 99,

  welcome: function () {
    console.log(`${this.username} , welcome to website`);
    //   console.log(this);         // this context or scope of object
  },
};

// console.log(user.welcome());
// console.log(this);           //global this context is {}  - empty object

function work() {
  const user = "jack";
  //   console.log(this.user);     // this can only be used in object
}

work();

// const working = function () {
//   const user = "jack";
//   console.log(this.user); // this can only be used in object
// };

// working();

const working = () => {
  const user = "jack";
  //   console.log(this);
};

working();

// () => {}     //arrow function

// have to user return key word if we use {}
// const addTwo = (x, y) => {
//   return x + y;
// };

// const addTwo = (x, y) => x + y;

const addTwo = (x, y) => ({ username: "jack" }); // to return object we need ({})

console.log(addTwo(4, 6));
