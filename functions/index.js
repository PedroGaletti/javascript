// Javascript functions

/*
---------- Ways two define functions ----------

Using the function keyword or using a arrow

*/

// Nomal function
function normal() {
  return "Hey"
}
// Output: Hey

// Arrow function
const arrow = () => {
  return "Arrow"
}
// Output: Arrow


/*
---------- Argument keyword ----------

You cannot use argument keyword inside arrow functions

*/

// Regular function
function regular(a, b) {
  console.log(arguments)
}
// Call: regular(1, 2)
// Output: Arguments[1, 2]


const arrowFunction = (a, b) => {
  console.log(arguments)
}
// Call: arrowFunction(1, 2)
// Output: arguments is not defined

/*
---------- New keyword ----------

Regular functions are constructible, they can be called using the new keyword but not arrow functions

*/

function add(x, y) {
  console.log(x + y)
}
let sum = new add(2, 3)
// Output: 5

let add = (x, y) => console.log(x, y)
// Output: TypeError: add is not a constructor

/*
---------- This keyword ----------

inside regular function this is equal to the execution context, this could be global object, an object that owns the method or itself if using the new keyword

*/

var name = "Pedro"
let object = {
  "name": "Galetti",
  arrowFunc: () => console.log(this.name),
  regularFunc() {
    console.log(this.name)
  }
}
object.arrowFunc() // Output: Pedro 
object.regularFunc() // Output: Galetti

/*
---------- Method ----------

You can define methods in class using regular function.
But if you apply this method as a callback you need to bind it first.
But if you use arrow function then you don't need to bind.

*/

class FullName {
  constructor(name) {
    this.name = name
  }

  result() {
    console.log(this.name)
  }
}

let fullname = new FullName("Pedro")

setTimeout(fullname.result, 2000) // Output: ""
setTimeout(fullname.result.bind(fullname), 2000) // Output: Pedro

class FullName {
  constructor(name) {
    this.name = name
  }

  result = () => console(this.name)
}

let arrowFullName = new FullName("Galetti")
setTimeout(arrowFullName.result, 2000) // Output: "Galetti"