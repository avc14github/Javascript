// problem with for each
// foreach does not return anything

const nums = [1, 2, 3, 4, 5];
const printnums = nums.forEach((i) => i * 2);
// console.log(printnums); //it will print undefined as foreach does not return

/*********   filter    ************************************* */
// filter will return values if condition is true for that element/item
// filter ( item , index , array )

// const filternums = nums.filter((i) => i <= 3);
// console.log(filternums);

// const filternums = nums.filter((i, index, numsarray) => {
//   console.log("number" + i);
//   console.log("index" + index);
//   console.log("array" + numsarray);
//   return i <= 3;
// });
// console.log(filternums);

//  same filtering with for each method
/*
const newnums = [];

nums.forEach((num) => {
  if (num <= 3) {
    // console.log(num);
    newnums.push(num);
  }
});

console.log(newnums); 
*/

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userbook = books.filter((book) => book.genre === "History");

userbook = books.filter(
  (book) => book.publish >= 1990 && book.genre === "History"
);
// console.log(userbook);
