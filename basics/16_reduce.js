// reduce
// reduce( accumulator, currentValue )
// reduce( acc , crr , index , array)

const nums = [1, 2, 3, 4, 5];

// const newnums = nums.reduce((acc, crr) => acc + crr, 0);
// console.log(newnums);

// const newnums = nums.reduce((acc, crr, index, array) => {
//   console.log("accumulator" + acc);
//   console.log("current value" + crr);
//   console.log("index" + index);
//   console.log("array" + array);
//   return acc + crr;
// }, 0);
// console.log(newnums);

const shoppingCart = [
  {
    item: "car",
    price: 5000,
  },
  {
    item: "bike",
    price: 2000,
  },
  {
    item: "home",
    price: 10000,
  },
];

// const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(cartTotal);

// cartInitialValue = 0;
// const cartTotal = shoppingCart.reduce(
//   (acc, item) => acc + item.price,
//   cartInitialValue
// );
// console.log(cartTotal);
