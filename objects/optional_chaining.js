// Optional chaining is a safe way to access an object properties where those
// properties may not exist.

let user = {};

// Address property doesn't exist, so this will give an error.
// console.log(user.address.street);

// now using optional chaining
console.log(user?.address?.street); // no error

// Evaluation stops if the value before ?. is undefined or null and returns
// undefined.

// Do not overuse the optional chaining since coding errors can be silenced
// where not appropriate, and become more difficult to debug.

// Optional chaining has other variants including ?.() and ?.[]

let one = {
  bar: () => "bar",
  baz: [123],
};

let two = {};

console.log(one.bar?.()); // bar
console.log(two.bar?.()); // undefined

console.log(one.baz?.[0]); // bar
console.log(two.baz?.[0]); // undefined

// Chaining can also be used to safely delete properties.

delete one?.bar; // Ok
delete two?.bar; // No error

// Though chaining cannot be used with assignment.
