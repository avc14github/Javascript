// iterations or loops
// for loop

for (let i = 0; i < 10; i++) {
  const element = i;
  //   console.log(element);
}

for (let i = 10; i <= 25; i++) {
  //   console.log(i * 2);
}

for (let i = 0; i < 10; i++) {
  const element = i;
  if (i == 5) {
    // console.log(`number is ${i}`);
  }
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`outer loop: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop : ${j} and outer loop: ${i}`);
  }
}

for (let i = 1; i <= 5; i++) {
  //   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 5; j++) {
    // console.log(i + " * " + j, " = " + i * j);
  }
}

let newArr = [2, 3, 4, 5, 6];
// console.log(newArr.length);
for (let index = 0; index < newArr.length; index++) {
  const element = newArr[index];
  //   console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log("num is 5");
    break;
  }
  //   console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log("num is 5");
    continue;
  }
  //   console.log(i);
}

const car = [10, 20, 30, 40];

car.forEach((e) => {
  //   console.log(e * 10);
});
