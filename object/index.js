// Javascript object

/*
---------- Ways to check if key exists ----------
"in" and "Reflect.has()" method is more prominent while others come with some limitations
*/

// Using "in" operator - The "in" operator returns true if specified property is present in the specified object or in its prototype chain, otherwise it returns false
const user = { name: "Pedro" }
console.log('name' in user) // true
console.log('city' in user) // false

/*
Using "hasOwnProperty" method - This method is present in the object prototype. SO any object which is not created with Object.create(null), has access to this method
This method returns true if the specified property is present in the object(not inherited) otherwise it returns false
*/
const last_name = { name: "Galetti" }
console.log(last_name.hasOwnProperty('name')) // true
console.log(last_name.hasOwnProperty('city')) // false

/*
Accessing the property and comparing it with "undefined"
If we access any property that doesn't exist on the object -> returns undefined
So, you can access the property and compare it value with undefined to know wheter it exists or not
*/
const full_name = { name: "Pedro Galetti" }
console.log(full_name['name'] === undefined) // false
console.log(full_name['city'] === undefined) // true
// Withou using undefined, it can be tested using if block like this as well
if(full_name['name']) {
  // logic
}
// We can't sure the existence of a property with previous approach when property exists in the object and has a value of undefined
const full_name_undefined = { name: undefined }
console.log(full_name_undefined['name'] === undefined) // true
console.log(full_name_undefined['city'] === undefined) // true

/*
Using Reflect.has() method - Reflect is a built in object that provides some utility methods for JavaScript operations
The has() method of this object returns true if specified property is present in the specified object or in its prototype chain, otherwise it returns false
*/
const name_has = { name: 'Pedro' }
console.log(Reflect.has(name_has, 'name')) // true
console.log(Reflect.has(name_has, 'city')) // false

/*
Object.hasOwn() method (ES2022) - this method returns true, if the specified property is present in the object(not inherited) otherwise it returns false
*/
const name_own = { name: 'Galetti' }
console.log(Object.hasOwn(name_own, 'name')) // true
console.log(Object.hasOwn(name_own, 'city')) // false

