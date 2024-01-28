//  for of loop ( can be used on array , object , string , array of objects)

// ["" ,  "" , ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  //   console.log(i * 2);
}

const name = "jay prakash";

for (const letter of name) {
  if (letter == " ") {
    continue;
  }
  //   console.log(letter);
}

// Map data type ( hold only unique key and its value cannot change)

const map = new Map();
map.set("country", " India");
map.set("continent", "Asia");
map.set("city", "mumbai");

// console.log(map);

map.set("newcountry", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ",", value);
}

for (const [key, value] in map) {
  console.log(key); // it will not print any value as map is not iterable
}

// for of object loop

const toyObj = {
  car: "auto car",
  speed: 100,
  price: 400,
};

// forof loop will not work on object in this syntax
// for (const key of toyObj) {
//   console.log(key);
// }

/* ------------------------------------------------------------- */

// for in loop

for (const key in toyObj) {
  //   console.log(key);
}

for (const key in toyObj) {
  //   console.log(`${key} is ${toyObj[key]}`);
}

const count = ["sam", "jam", "ram"];

for (const key in count) {
  //   console.log(key);        // it will print number or array index as key
  // console.log(count[key]);
}

/*-----------for each / Higher order function ----------------------*/
// foreach requires callback function eg. foreach(function(){}) / foreach(()=>{})

const className = [1, 2, 3, 4, 5, 6];

className.forEach(function (e) {
  // console.log(e);
});

// className.forEach((e) => console.log(e * 2));

/*
function printitem(item) {
  console.log(item);
}

className.forEach(printitem);
*/

className.forEach((item, index, myarr) => {
  // console.log(item, `index ${index}`, myarr)
}); //for each has 3 param , items , index and array

const students = [
  {
    name: "rajesh",
    rollno: 1,
  },
  {
    name: "suresh",
    rollno: 2,
  },
  {
    name: "dipesh",
    rollno: 3,
  },
];

students.forEach((student, index) =>
  console.log(student.name, student.rollno, index)
);
