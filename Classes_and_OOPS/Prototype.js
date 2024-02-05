//

let myName = "Hitesh    ";

// console.log(myName.length);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
};

myName.trueLength();
"jacob".trueLength();
"Bupendar".trueLength();

let myHeros = ["Thor", " IronMan", "Spiderman"];

let heroPower = {
  Thor: " Hammer",
  IronMan: "Suit",
  Spiderman: "Sling",
};

Object.prototype.aayush = function () {
  console.log(`aayush is present in all objects`);
};

Array.prototype.newAayush = function () {
  console.log(`this is new Aayush`);
};

heroPower.aayush();
myHeros.aayush();

// heroPower.newAayush();
myHeros.newAayush();

// inheritance  - prototype

const user = {
  name: "Bard",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSuppot = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: TeachingSuppot,
};

Teacher.__proto__ = user;

// modern syntax

Object.setPrototypeOf(TeachingSuppot, Teacher);
