/*the var keyword is another way to define variables that is similar to let and const

excepting for a few key things.

1) When used at the top level of code, var will defined properties on the global object.
    a little note here: when using Node (insetad of the node REPL), your code gets
      wrapped in a function, which creates a function-scoped variable rather than a 
      global variable.

2) variables declared with var have FUNCTION SCOPE, meaning they are accessible ANYWHERE 
within a function.

*/


//visibility: WHERE it's available. GLOBAL or LOCAL?
    //local - function or block scope. Function = declared inside function.
      //block = declared in a block.
    //var declaration = Global. Unless inside a function.
    // top level of code == GLobal.
    //inside a block / let declaration = Local.

//declared scope: HOW it's declared. var vs let vs const. class. function.
// This helps with determining where the variable is available..


    // let, const, class have BLOCK SCOPE.
    // var, function have FUNCTION SCOPE.
//lexical scope: INSIDE vs OUTSIDE a block or function.

if(true) {
  let foo2 = 3;
  var bar2 = 4;
}

function ex1() {
  var a = 2;

  if(false) {
    var bar4 = 7;
  }
  console.log(a);
  console.log(bar4);

}

ex1();
