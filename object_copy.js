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

// Objects can also be properties of other objects.

// Outer object
user = {
  name: "John",
  // Inner object
  sizes: {
    height: 182,
    width: 50,
  },
};

// Though when creating a copy of user, the sizes property doesn't get copied.
clone = Object.assign({}, user);
console.log(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width = 60;
console.log(clone.sizes.width); // 60, get the result from the other one

// It's not enough to use Object.assign since sizes doesn't get copied.
// To solve this, we'd have to loop through every property value to see if it's
// an object and clone it if it is.

// The structuredClone function can do this for us.
clone = structuredClone(user);
console.log(user.sizes === clone.sizes); // false, different objects

// user and clone are unrelated now
user.sizes.width = 30;
console.log(clone.sizes.width); // 60, unchanged

// structuredClone works with most types. It also supports cloning a circular
// reference (object with a reference value of itself). But there are cases
// where the function fails. One example is when cloning an object that
// contains a function property.
structuredClone({
  // f: function () {}, // error
});
