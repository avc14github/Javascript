// objects
// object.create   // consturctor - singleton

// symbol in objects
mySym = Symbol("key1");

// object literals
const person = {
  name: "hari",
  age: 16,
  rollno: 78,
  isStudent: true,
  address: {
    flatNo: "B/104",
    street: "Kingston road",
    city: "Mumbai",
  },
  [mySym]: "mykey",
};

// console.log(person.address);
// console.log(person["name"]);

// console.log(person.rollno);

person.rollno = 45;

// console.log(person.rollno);

// Object.freeze(person);       //freeze the object , we cannot edit values

person.name = "rakesh";

// console.log(`after freeze ${person.name}`);

// console.log(person);

person.greeting = function () {
  console.log("person is a student");
};

// console.log(person.greeting());

person.greetingNew = function () {
  console.log(`person ${this.name} is a student`);
};

// console.log(person.greetingNew());

const newObj = new Object();

newObj.person = "hari";
newObj.rollno = 14;
newObj.address = {
  flatno: "b/104",
  road: "church road",
  city: "indore",
};

// console.log(newObj);

const fruits = new Object({
  name: "chikko",
  color: "green",
  cultivationArea: "Delhi",
});

const newFruits = new Object({
  name: "apple",
  color: "red",
  cultivationArea: "noida",
});

// console.log(fruits);

// console.log(newFruits);

const newcombination = Object.assign({}, newFruits, fruits);

// console.log(newcombination);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const add = Object.assign({}, obj1, obj2, obj3);
// console.log(add);

const addspread = { ...obj1, ...obj2, ...obj3 };
// console.log(addspread);

const mult = [
  {
    id: 34,
    name: "rocky",
  },
  {
    id: 35,
    name: "kittu",
  },
  {
    id: 36,
    name: "bittu",
  },
];

// console.log(mult[2].name);

// console.log(Object.values(fruits));     // give a array of values
// console.log(Object.keys(fruits));       // give a array of keys

// console.log(Object.entries(fruits));  //gives object output as array or key value pair

// console.log(fruits.hasOwnProperty("location")); // to find if object has that property

// *****************************Objects destructuring ****************************

const objdetails = {
  course: "hindi",
  price: 999,
  teacher: "ram",
};

const { course, price } = objdetails;

console.log(price);

const { teacher: Instructor } = objdetails;

console.log(Instructor);

// json
/*

{
  "name": "yoing",
  "age" : 900,
    
}
*/
