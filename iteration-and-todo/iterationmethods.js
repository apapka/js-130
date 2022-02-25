function filter(array, callback) {
  let newArray = [];
  for(let index = 0; index < array.length; index++ ){
    let currVal = callback(array[index]);
    if (currVal === true) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]


function map(array, callback) {
  let newArray = [];
  for(let i = 0; i < array.length; i ++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

let arr = [1,2,3];
console.log(...arr);