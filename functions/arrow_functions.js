// Arrow functions are an alternate way to write functions in a concise way.
// They do have more features, but that will be covered later.

let func = (arg1, arg2, arg3, argN) => expression;
// This is the shorter version of:
// let func = function(arg1, arg2, ..., argN) {
//   return expression;
// };

let double = (n) => n * 2;
console.log(double(2));

let getLetters = () => "abcd";
console.log(getLetters());

// Multiline arrow function
let product = (x, y) => {
  let output = x * y;
  return output;
};
console.log(product(4, 3));
