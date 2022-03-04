//var does a few things differently than let and const.

//1) var defines variables on the global object (when used at the top level of a program)
    //(not when you use var inside a function...)

//2) var is function-scoped. let is block scoped. variables declared with bar can be accessed
//ANYWHERE within the function.

  // a block is anything between braces that is executable. (NOT OBJECT LITERALS).

// function foo() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//   }
//   console.log(a); //1
//   console.log(b); //ReferenceError: b is not defined.
// }

// foo();


bar();             // raises "TypeError: bar is not a function"
var bar = 'hello';

function bar() {
  console.log('world');
}
