(function() {
  console.log('hello');
})();

(function(){
  console.log("Sometimes syntax isn't intuitive!")
})();

// function foo() {
//   console.log("hello again");
// }();

let foo = function(){
console.log("hello agin");
}();

// foo();

let bar = function(start) {
  let prod = start;
  return function(factor) {
    prod *= factor; 
    return prod;
  }
}(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

function countdown(num) {
  if(num === 0){
    return 0;
  }
  return num + countdown(num - 1);
}