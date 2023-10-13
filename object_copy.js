// Objects are stored and copied by reference.
// In contrast, primitives are copied by value.

let user = { name: "foo" };
let admin = user; // copies reference
admin.name = "bar";
console.log(user);

let a = {};
let b = a;
console.log(a == b, a === b);

// To make copies of an object, one way is to manually copy every property
let clone = {};
for (let key in user) {
  clone[key] = user[key];
}
console.log(clone);

// Another way is using the Object.assign function
let o1 = { a: 1 };
let o2 = { a: "one", b: 2 };
// let dest = {};
// Object.assign(dest, o1, o2); // copies both o1 and o2 to dest
let dest = Object.assign({}, o1, o2);
console.log(dest);
