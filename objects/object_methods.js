// Objects usually represent real world entities. Objects can have function
// properties to implement some action.

let user = {
  name: "bob",

  // greet: function () {
  //   alert("Hello");
  // },

  // same as above
  greet() {
    console.log("hello");
  },
};

user.greet(); // hello

// The `this` keyword can be used to access an object's other properties.

user.greet = function () {
  console.log(this.name);
};

user.greet(); // bob

// `this` keyword cannot be used within arrow functions.

let node = {
  val: 10,

  getVal() {
    return this.val;
  },

  getValArrow: () => this.val,

  // However, an arrow function nested within an outer function can access
  // `this` from the outer context.
  getValInnerArrow() {
    let arrow = () => console.log(this.val);
    arrow();
  },
};

console.log(node.getVal()); // 10
console.log(node.getValArrow()); // undefined
node.getValInnerArrow(); // 10
