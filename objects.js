// Of the eight data types in JS, seven are primitive because their
// values contain a single thing. Objects are used to store keyed
// collections of various data and more complex entities.
//
// Objects are used a lot in JS, so we must understand them first
// before going in-depth anywhere else.
//
// An object can be created with figure brackets {} with an optional list
// of properties. A property is a "key: value" pair, where key is a string
// (also called a "property name"), and value can be anything.

let _user = Object();
let __user = {};

let user = {
  name: "John", // key "name" stores value "John"
  age: 30, // key "age" stores value 30
};

// Property values are accessible using the dot notation

// Accessing
console.log(user.name); // John
console.log(user.age); // 30

// Updating
user.isAdmin = true;
user["likes birds"] = true;

// Deleting
delete user.age;

console.log(user);

// Adding square brackets to an object literal property is known as a
// computed property.

let fruit = "apple";

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.apple); // 5 if fruit is "apple"

// Property value shorthand
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...other properties
  };
}
makeUser("John", 30);

// Prototype keys can be numbers which would be converteed into strings
let obj = {
  0: "test", // same as "0": "test"
};

console.log(obj["0"]); // test
console.log(obj[0]); // test (same property)

// Accessing a property that doesn't exist won't give an error,
// it will return undefined.

let x = { a: 1, b: 2 };
console.log(x.c);

// Use the in keyword to see if a property exists in an object.
console.log("c" in user);
// Use a quoted string for the target property since a variable
// would use it's value
let b = false;
console.log(b in x);
