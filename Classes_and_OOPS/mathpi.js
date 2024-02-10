const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// console.log(Math.PI)
// Math.PI = 4
// console.log(Math.PI)

const chai = {
  name: "ginger Chai",
  price: 250,
  isAvailable: true,

  order: function () {
    console.log("chai is order");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// defining property of objects

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "new chai";

console.log(chai);

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
// console.log(`${key} : ${value}`);
}
