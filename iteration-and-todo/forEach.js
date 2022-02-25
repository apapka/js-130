function forEach(array, callback, thisArg) {
  for (let i = 0; i < array.length; i++) {
    callback.call(thisArg, array[i]);
  }
}
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
// [1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem); 
// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

['a','b','c'].forEach(function(value,index,arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`)
});