function function1(){
  let bar = 1; 
  let test = function(){
    console.log(bar);
  }
  return test;
}

let a = function1();
a();

function calc() {
  let total = 1;
  function add() {
    total += 1;
    console.log(total);
  }
  function subtract() {
    total -= 1;
    console.log(total);
  }
  return [add, subtract];
}
let calculator = calc();
let add = calculator[0];
let subtract = calculator[1];
add();
add();
add();
subtract();

function userNumberGenerator(){
  let number = 1;
  return function(){
    number += 1;
    return number;
  }
}

let numberGen = userNumberGenerator();
let firstUser = numberGen();
let secondUser = numberGen();
let thirdUser = numberGen();
console.log(`${firstUser} + ${secondUser} + ${thirdUser} `)


function makeMultipleLister(multiple) {
  return function(){
    for (let i = multiple; i < 100; i += multiple) {
      console.log(i);
    }
  }
}
let lister = makeMultipleLister(17);
lister();

function later(func, arg) {
  return function() {
   return func(arg);
  }
}
const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

function later2(func, arg1) {
  return function(arg2) {
    return func(arg1, arg2);
  }
}
const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

function bind(object, func) {
  return function() {
    func.call(object);
  }
}