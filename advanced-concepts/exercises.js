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


let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName; 

  function validPassword(password) {
    return this.password === password;
  },
  function getRandomLetterNumber(){
    let idx = Math.random() * 69;
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[idx];
  }
  function anonymize() {
    let result = '';
    for (let i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }
    return result;
  }
  return {
    init(email, password, fName, lName){
      userEmail = email;
      userPassword = password;
      userFirstName = fName;
      userLastName = lName;
      this.displayName = anonymize();
      return this;


    }, 
    reanonymize(password) {
      if (validPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid password'
      }
    }, 
    resetPassword(current, newPw) {
      if(validPassword(current)) {
        userPassword = newPw;
        return true;
      } else {
        return 'Invalid Password';
      }

    },
    firstName(pword) {
      if (validPassword(pword)){
        return userFirstName;
      } else {
        return "Invalid Password";
      }

    },
    lastName(pword) {
      if(validPassword(pword)) {
        return userLastName;
      } else {
        return "Invalid Password";
      }
    }, 
    email(pword) {
      if (validPassword(pword)) {
        return userEmail;

      }else {
        return 'Invalid Password';
      }
    }
  }
})();

function itemCreator (name, category, quantity) {
  if (name.length < 5 || category.length < 5 || category.contains("  ") || quantity < 0) {
    return {
      sku: (name.slice(0,3) + category.slice(0,2)),
     name,
     category,
     quantity,
     notValid: true,
   }
    
  }
   return {
     sku: (name.slice(0,3) + category.slice(0,2)),
     name,
     category,
     quantity,
     notValid: false,
   }
}

let ItemManager = {
  items = [], 
  inStock(){

  },
  itemsInCategory(category) {

  },
  create(name, category, quantity) {
    let item = itemCreator(name, category, quantity);
    if (item.notValid === true){

    } else {
      this.items.push(item);
    }
  },
  update(sku, obj) {

  },
  delete(sku) {

  }, 

}