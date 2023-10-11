// Function declaration: can be called earlier than it is defined.
function sum1(a, b) {
  return a + b;
}

// Function expression: created when the execution reaches it and is
// usable only from that moment.
let sum = function (a, b) {
  return a + b;
};
// A semicolon is used since this is an assignment.

// A function can be copied to another variable.

let square = function (x) {
  return x * x;
};

let pow2 = square;

console.log(square(10));
console.log(pow2(10));
