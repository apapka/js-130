/*

Closures are good for
callbacks
partial function application
creating private data

will learn more later about: 
  currying
  emulating private methods
  creating functions that can only be executed once
  memoization (avoiding repetitive resource-intensive operations)
  iterators and generators
  the module pattern (putting code and data into modules)
  asynchronous operations
*/

//write a function named makeMultipleLister that you can call with a number as an argument.
//The function should return a new function that, when invoked, logs every positive integer multiple
//of that number less than 100. 

function makeMultipleLister (number) {
  return function() {
    for (let i = number; i < 100; i += number) {
      console.log(i);
    }
  }
}

let lister = makeMultipleLister(17);
// lister(); 

let number = 0;
function add(num) {
   number += num;
   console.log(number);
}
function subtract(num) {
  number -= num;
  console.log(number);
}

add(1);
add(42);
subtract(39);
add(6);