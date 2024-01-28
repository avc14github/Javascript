// array

const myArray = [1, 2, 3, 4, 5];

// console.log(myArray[0]);

const newArray = myArray; // creates shallow copy of array

// console.log(newArray);
// console.log(myArray);

newArray.push(8);

// console.log(newArray);
// console.log(myArray);

const myArray2 = new Array(3, 4, 5, 7, 10, 6, 8);

// push , pop - add remove from end
// shift(remove) , unshift (add) from start of array

/*
console.log(myArray2);

console.log(myArray2.includes(8)); //return true or false if value exist

console.log(myArray2.length);

console.log(myArray2.indexOf(5));

console.log(myArray2.join());     // array elements to string with comma ","  "1,2,3,4"

*/

/* slice , Splice for array 

const arrayElement = new Array(3, 6, 8, 9, 10, 23, 56);

console.log(`Original array ${arrayElement}`);

const sliceArray = arrayElement.slice(1, 4);

console.log(`slice  ${sliceArray}`);

console.log(`Original array after slice ${arrayElement}`);

const spliceArray = arrayElement.splice(1, 4);

console.log(`Splice  ${sliceArray}`);

console.log(`Original array after splice ${arrayElement}`);

*/

// array ...spread , concat , push(array)

const fruits = ["apple", "mango", "banana"];

const vegetables = ["potato", "tomato", "eggplant"];

// const allpush = fruits.push(vegetables);

// const allconcat = fruits.concat(vegetables);

// const allspread = [...fruits, ...vegetables];

const nestedArray = [1, 2, [4, 5, 6, [22, 78, 99], 0], 9, 4];

// console.log(nestedArray);

const arrayFlat = nestedArray.flat(Infinity);

// console.log(arrayFlat);

// array from string

const name = "hitesh";

console.log(Array.isArray(name));

console.log(Array.from(name));

const person = { name: "jitesh" };

console.log(Array.from({ name: "hitesh" })); //interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));

// challenge
/*

const array1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(`array1  ${array1}`);

const newArrayEven = array1.filter((e) => e % 2 == 0);

console.log(`is even of array1  ${newArrayEven}`);

const newArrayOdd = array1.filter((e) => e % 2 != 0);

console.log(`is odd of array1  ${newArrayOdd}`);

const newArrayDouble = array1.map((e) => e + e);

console.log(`is double of array1  ${newArrayDouble}`);

*/
