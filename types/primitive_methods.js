// Primitives
// - Values of a primitive type
// - The 7 primitive types: string, number, bigint, boolean, symbol, null, undefined
//
// Objects
// - Store multiple values as properties
// - Functions are also objects
//
// Objects can also store functions which are useful. JS contains built-in
// objects that we can use, but objects require more resources than primitives.
//
// The problem here is that it'd be nice having methods for primitives, but primitives
// need to be fast and small in size.
//
// The solution is that JS uses object wrappers, which is a temporary object that is
// created when acessing a property.

let str = "Hello";
console.log(str.toUpperCase()); // HELLO

let n = 1.23456;
console.log(n.toFixed(2)); // 1.23

// This allows primitives to have methods while still remaining lightweight.
// Note: null and undefined don't have object wrappers.
