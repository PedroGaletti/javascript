// Javascript loops

// for
for (let i = 0; i < 5; i++) {
  console.log(i)
}
// Output: 0 1 2 3 4

// do-while
let do_iterator = 0
do {
  do_iterator++
  console.log(do_iterator)
} while (do_iterator < 5)
// Output: 1 2 3 4 5

// while
let while_iterator = 0
while(while_iterator < 5) {
  while_iterator++
  console.log(while_iterator)
}
// Output: 1 2 3 4 5

// for...in
const for_in_arr = [3, 5, 7]
for_in_arr.foo = 'hello'
for (let i in for_in_arr) {
  console.log(i)
}
// Output: "0", "1", "2", "foo"

// for...of
const for_of_arr = [3, 5, 7]
for_of_arr.foo = 'hello'
for (let i of for_of_arr) {
  console.log(i)
}
// Output: 3, 5, 7