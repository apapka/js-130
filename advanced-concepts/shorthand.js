
// //concise property initializer
// function xyzzy(foo,bar,qux) {
//   return{
//     foo,
//     bar,
//     qux,
//   }
// }

// //concise methods
// let obj = {
//   foo: function() {

//   }, 
//   bar() {
  
//   }
// }

// //object destructuring: multiple assignments in a single expression

// let abc = {
//   foo: "foo" ,
//   bar: "bar",
//   qux: 42,

// }
// let { foo, bar, qux : myQux} = abc;
// //this assigns new variables foo, bar, qux to their respective properties on obj.
//   //and renames qux to myQux.

//   //function parameters destructuring

//   function xyzzyy( { foo, bar, qux }) {
//     console.log(qux); 
//     console.log(bar);
//     console.log(foo);
//   }
//   xyzzyy(abc);

//   //array destructuring

//   let a = [1,2,3];
//   let [ first, second, third ] = a;

//   //^^ is the same as ::
//    first = a[0];
//    second = a[1];
//    third = a[2];

//   //you can swap values of two variables:

//   let one = 1;
//   let two = 2;

//   [ one, two ] = [two, one];

//   //you can use rest syntax in an array destructuring to assign a variable to the 
//   //rest of the array

//   let fo = [1,2,3,4];
//    [bar , ... qux] = fo;
//   console.log(bar); //1
//   console.log(qux); // [2,3,4]

//   //Spread syntax uses ... to spread elements of an array or object into separate items.

//   //can replace the apply method.

// // can create a clone of an array

// foo = [1,2,3];
// bar = [...foo];

// //can concatenate arrays

// bar = [4,5,6];
// qux = [...foo,...bar];

// //can clone an object

// foo = {qux: 1, baz: 2};
// bar = {...foo};

// //merge objects

// foo = {qux: 1, baz: 2};
// let xyz = {baz: 3, sup: 4};
// obj = {...foo, ...xyz};
// obj; //{qux: 1, baz: 3, sup: 4};

// //******Spread syntax only returns enumerable "own" properties. Does not work
// // with inherited objects, and you lose object prototype. 


// //REST syntax

// //

// //practice problems
// // function foo(bar,qux, baz) {
// //   return {
// //     bar: bar, 
// //     qux: qux, 
// //     baz: baz
// //   }
// // }

// // function foo() {
// //   return {
// //     bar: function() {
// //       console.log('bar');
// //     },
// //     qux: function(arg1 ){
// //       console.log('qux');
// //       console.log(arg1);
// //     },
// //     baz: function(arg1, arg2) {
// //       console.log('baz');
// //       console.log(arg1);
// //       console.log(arg2);
// //     }
// //   }
// // // }
// // function foo(one, two, three) {
// //   return {
// //     bar: one,
// //     baz: two,
// //     qux: three,
// //   };
// // }


// //  obj = foo(1,2,3);
// //  baz = obj.baz;
// //  qux = obj.qux;
// //  bar = obj.bar;

// // function foo(array) {
// //   return [arr[2], 5, arr[0]];
// // }
// // let array = [1,2,3];
// // // let result = foo(array);
// //  bar = result[0];
// //  qux = result[1];
// //  baz = result[2];

function product(num1, num2, num3){
  return num1* num2 * num3;
}
 array = [2,3,5];
 result = product(array[0],array[1],array[2]);
 console.log(result);
 result = product.apply(null, array);
 console.log(result);

 function product() {
  let arr = Array.from(arguments);
   return arr.reduce((total, number) => total * number);
 }
 let result = product(2,3,4,5);

 function qux() {
   let animalType = 'cat';
   let age = 9;
   let colors = ['black', 'white'];
   return {
     type: animalType,
     age,
     colors
   }
 }

 function (one,two,three,four,five) {
   return {
     first: one,
     last: five,
     middle: [two,three,four].sort();
   }
 }