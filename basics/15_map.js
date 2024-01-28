// map method
// map(item , index , array)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newnums = nums.map((num) => num * 2);
console.log(newnums);

// newnums = nums.map((num, index, numsarr) => {
//   console.log(" number " + num);
//   console.log(" index " + index);
//   console.log("nums array" + numsarr);
//   return num * 10;
// });
// console.log(newnums);

// chaining methods
const chainnums = nums
  .map((i) => i * 10)
  .map((i) => i + 5)
  .filter((i) => i <= 40);

// console.log(chainnums);
