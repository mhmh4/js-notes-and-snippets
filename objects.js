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
