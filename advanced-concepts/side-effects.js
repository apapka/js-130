//side effect through reassignment

let number = 42;
function incrementNumber() {
  number += 1; //side effect: number is defined in outer scope. 
                //  Reassigning a variable not declared inside the function
}

//side effects through mutation

let letters = ['a','b', 'c'];
function removeLast() {
  letters.pop(); // side effect: alters the array referenced by letters.
}

//( a  more subtle situation occurs when an array or object is passed as an arg)
function removesLast(arr) {
  arr.pop();
}
removesLast(letters);

//input / output: anything that causes JS to acquire data from or 
//send data outside the actual program is a side effect.

//side effects through exceptions
//unhandled exceptions

//side effects through other functions
/*
console.log has a side effect
readline.question has multiple side effects
new Date() has a side effect
Math.random() has a side effect
*/