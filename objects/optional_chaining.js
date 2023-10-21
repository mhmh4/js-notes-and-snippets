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
