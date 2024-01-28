// hello function
const hello = function () {
  console.log("hello world");
};

// console.log(hello());

// name function
function name(name) {
  if (!name) {
    return `enter a name`;
  }
  return `my name is ${name}`;
}

// console.log(name("jimmy"));

// print addition
const add = function (num1, num2) {
  return num1 + num2;
};

// console.log(add(8, 9));

// rest parameter function

function addition(val1, val2, ...nums) {
  // it will return only num varaible
  return nums;
}

// console.log(addition(8, 7, 6, 5));

// objects in function

function handleobj(anyobject) {
  return `Username is ${anyobject.name} and login id is ${anyobject.id}`;
}

console.log(handleobj({ name: "rakesh", id: 3 }));

// array in function

function handlearr(array) {
  return `second element of array is ${array[1]}`;
}

console.log(handlearr([7, 9, 5, 2]));

// swap variable

function swap(a, b) {
  console.log(`a: ${a} b:${b}`);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`a: ${a} b:${b}`);
}

// console.log(swap(10, 20));
