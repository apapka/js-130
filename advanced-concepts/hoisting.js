console.log(getName());

function getName() {
  return "Pete";
}


//Temporal Dead Zone (TDZ) : 
  //when let and const variables are hoisted they ARE NOT initialized.
  //when CLASSES are hoisted they are NOT initiailzed. 

//variables declared with var are hoisted and undefined.
// console.log(bar);    //undefined
// var bar = 1; 
// console.log(bar); //1

// variables declared with let or const are hoisted and NOT INITIALIZED.
// console.log(foo); //ReferenceError: Cannot access 'foo' before initialization.
// let foo = 3;

// console.log(qux); //ReferenceError: Cannot access 'qux' before initialization.
const qux = 4;


//Functions are hoisted, including their body.
// console.log(hello());

// function hello() {
//   return 'hello world';
// }

//hoisting also occurs with nested functions because function declarations have function scope.

//function expressions obey hoisting rules for variable declarations...

// console.log(hello());//TYPE ERROR: hello is not a function.

var hello = function () {
  return 'hello world';
};

//classes : name gets hoisted, definition of class does NOT.
// let abc = new ABC(); //ReferenceError: Cannot access 'ABC' before initialization.
class ABC {
  constructor(){
    a: 1;
  }
}

//if a var variable and a function have the same name, the function gets hoisted 
//and the variable declaration gets discarded.

// bar();
// function bar() {
//   console.log('world');
// }
// var bar = 'hello';

// foo();
// var foo = function() {
//   console.log("Bye");
// };


// function foo() {
//   console.log("Hello");
// }




function foo(condition) {
  console.log(bar);

  qux = 0.5772;

  if (condition) {
    var qux = 3.1415;
    console.log(qux);
  } else {
    var bar = 24;

    var xyzzy = function() {
      var qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

function foo(condition) {
  var qux; 
  var bar; 
  var xyzzy;

  console.log(bar); //undefined
  qux = 0.5772;
  if(condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;
    xyzzy = function() {
      qux = 2.7183;
      console.log(qux);
    }
    console.log(qux);
    console.log(xyzzy());

  }
  qux = 42; 
  console.log(qux);


}



Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);

////hoisting ::
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}
let Image
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};


