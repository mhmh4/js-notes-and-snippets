let fruits = ["Apple", "Avocado", "Cherry", "Orange", "Plum"];

console.log(fruits.length);

console.log(fruits.at(0));
console.log(fruits.at(-1));
console.log(fruits.at(-2));

// push(x) adds x to the end of an array
// pop() removes and returns last element of an array
// shift() removed first element of array
// unshift(x) adds element to the beginning of the array
//
// note push and unshift can take multiple arguments

// Arrays are just a special type of object. Recall that there are only eight
// basic data types.

// Since they're objects, arrays are stored as references.
let a = [];
let b = a; // doesn't create a copy

// iterating through our array
for (let fruit of fruits) {
  console.log(fruit);
}

// An alternate way of creating arrays is using its constructor
let primes = new Array(2, 3, 5, 7);

// If the constructor is called with a single number, it creates an empty array
// with a length equal to the argument.

let row = new Array(8);
console.log(row); // [ <8 empty items> ]

console.log(fruits);
// Array.toString returns a comma-separated list of elements
console.log(fruits.toString());

// Don't compare arrays using `==`.
