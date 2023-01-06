// Javascript spread

// pass all the elements of numbers as arguments to the operate function
let numbers = [3, 6, 2, 4]
function operate() {
  console.log(arguments)
}
operate(...numbers)

// Spread syntax with array literals
const arr = ["el4"] 
const el = ["el1", "el2", "el3", ...arr]
// add the elements of arr to the array

// Spread syntax with object literals
let obj = { name: 'Pedro' }
let copy = { ...obj }
// Spread all key-value pairs from obj to a new object

/* 
---------- Examples ---------
*/

// With a function
function showCoords(x, y, z) {
  console.log(`x: ${x} y: ${y}, z: ${z}`)
}
const coords = [2, 1.5, 3.5]
showCoords(...coords)
// Output: "x: 2, y: 1.5, z: 3.5"

// With an Array literal
const boys = ['Bob', 'Charlie']
const girls = ['Alice', 'Diana']
const all = [...boys, ...girls]
// Output: ["Bob", "Charlie", "Alice", "Diana"]
const all_exmaple = ["Eric", ...boys, ...girls, "Gabriel"]
// Outpu: ["Eric", "Bob", "Charlie", "Alice", "Diana", "Gabriel"]

// With Object literal
let obj_value = {test: "value", x: 10}
let obj_spread = {test: "other value", y: 20}
let combined = { ...obj_value, ...obj_spread }
// Output: { test: "other value", x: 10, y: 20 }