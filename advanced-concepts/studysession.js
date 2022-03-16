//examples for Aaron

function Car (model, make) {
  this.model = model;
  this.make = make;
}
Car.prototype.drive = () => {
  console.log("Vroom vroom");
}

let car1 = new Car("Honda", "Accord");
car1.drive();

// rewrite the Car constructor so that it can work without the new keyword



//What will the following code do? 


// function Dog(breed) {
//   this.breed = breed;
//   return {};
// }
// Dog.prototype.bark = function() {
//   console.log(`Woof! I'm a ${this.breed}.`);
// }

// let fido = new Dog("Spaniel");
// fido.bark();


//what if we change line 22 to return the string "Doggo";



//Explain what mix-ins are using a code example.



/*
Concepts to Explain

- scope : declared (block vs function), visibility (global vs local), lexical (inner vs outer)
- the var keyword: function scope, defining properties on global object
- hoisting : JS engine's two phases: creation, execution. the Temporal Dead Zone 
- closures
- immediately invoked functions

*/



let foo = 1;
function print() {
  console.log(foo);
};
print();

function makeCounter() {
  let count = 1;
  return function() {
    count += 1;
    console.log(count);
  }
}

let increment = makeCounter();
// increment();
// increment();
// increment();

function baz(){
  let trackme = 1;
  let name = "Pearl";
  function foo() {
    trackme += 1;
    console.log(trackme);
  }; 
  function rename(newName){
    name = newName;
    console.log(name);
  }
  return [foo, rename];
}
let x = baz();
let y = x[0];
let z = x[1];
// y();
// z("jamie");


function test(){ 
  console.log(newVar);
}
test();
let newVar = 5;
