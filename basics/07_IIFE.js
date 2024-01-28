//  IIFE (Immediately Invoked Function Expressions)
// ( <function definition> )( function execute);

// function call() {
//   console.log(`you made a call`);
// }

// call();

(function call() {
  // named IIFE
  console.log(`you made a call`);
})(); // always add semicolon at end to close function and its callback

(() => {
  // simple or unnamed IIFE
  console.log(`you made another call`);
})();

((name) => {
  // IFFE with passing parameter
  console.log(`you made another call ${name}`);
})("jack");

const greeting = "Hello world";

(function myGreeting() {
  console.log(greeting);
})();

// execution context , call stack
// global execution context
// function execution context
