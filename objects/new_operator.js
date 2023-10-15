// The new operator allows us to create many similar objects.

// Constructor functions are still regular functions, but they should only be
// used with the new operator.

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false

// What's happening is an empty object named `this` is created at the beginning
// of the constructor function and is then returned at the end.

// Alternative way of creating an object with a constructor function.
// Note the constructor cannot be reused since it's not being saved.

// prettier-ignore
let newUser = new function () {
  this.name = "Jack";
  this.isAdmin = false;
  // more complex logic can go here
};

console.log(newUser);
