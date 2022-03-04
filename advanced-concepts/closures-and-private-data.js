function makeCounterLogger(num) {
  return function(secondNum) {
    if(num < secondNum) {
      for(let i = num; i <= secondNum; i++) {
        console.log(i);

      }
    } else {
      for (let i = num; i >= secondNum; i --) {
        console.log(i);
      }
    }
  }
}

let countlog = makeCounterLogger(5);
// countlog(8);


// function makeList() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + " added!");
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + " removed!");
//       }
//     } else if (items.length === 0) {
//       console.log("The list is empty.");
//     } else {
//       items.forEach(item => console.log(item));
//     }
//   };
// }

function makeList() {
  let items = [];
  return {
    add: function(item) {
      items.push(item);
      console.log(`${item} added`);
    }, 
    remove: function(item) {
      items.splice(items.indexOf(item),1);
      console.log(`${item} removed`)
    },
    list: function(){
      items.forEach(item => console.log(item));
    }
  }
}

let list = makeList();
list.add("peas");
list.list();
list.add('corn');
list.list();
list.remove("peas");
list.list();