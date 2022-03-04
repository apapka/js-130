//very own BIND()

function myBind(fxn, context) {
  return function() {
    return fxn.apply(context, arguments)
  }
}

function newStack() {
  let stack = [];
  return {
    push(value) {
      stack.push(value);
    },
    pop(){
      return stack.pop();
    },
    printStack(){
      stack.forEach(elem => console.log(elem))
    }

  }
}

function delegate(context, methodName) {
  let args = Array.prototype.slice.call(arguments, 2);
  return function() {
    return context[methodName].apply(context, args);
  }
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  }
};
let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};
baz.qux();
foo.bar = function() {console.log('changed')};
baz.qux();