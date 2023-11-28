// Object property keys may be only two types: strings or symbols. Any other
// type would be automatically converted to a string

// A symbol represents a unique identifier.
// A value of this type can be created using Symbol():
let id = Symbol();

// Upon creation, we can give symbols a description (also called a symbol name),
// mostly useful for debugging purposes:
// id is a symbol with the description "id"

id = Symbol("id");
console.log(id);

// Symbol's do not auto-convert to a string, so you cannot log them directly unless
// you can toString on it

// Symbols are guaranteed to be unique. Even if we create many symbols with
// exactly the same description, they are different values. The description is
// just a label that doesn’t affect anything.

// In summary, a symbol is a primitive unique value with an optional description
