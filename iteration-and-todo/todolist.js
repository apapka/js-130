class Todo{
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }
  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }
  markDone() {
    this.done = true;
  }
  markUndone() {
    this.done = false;
  }
  isDone() {
    return this.done;
  }
  getTitle() {
    return this.title;
  }
}

class TodoList{
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  add(todo) {
    if(!todo instanceof Todo){
      throw new TypeError("can only add Todo objects");
    }
    this.todos.push(todo);
  }
  size() {
    return this.todos.length;
  }
  first() {
    return this.todos[0];
  }
  last() {
    return this.todos[this.size() - 1];
  }
  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }
  _validateIndex() {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`)
    }
  }
  markDoneAt(index) {
    this.itemAt(index).markDone();
  }
  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }
  isDone(){
    return this.todos.every(todo => todo.isDone());
  }
  shift() {
    return this.todos.shift();
  }
  pop() {
    return this.todos.pop();
  }
  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }
  toString() {
    console.log(this.title);
    this.todos.forEach(todo => console.log(todo.toString));
  }
  forEach(callback) {
    return this.todos.forEach(callback);
  }
  filter(callback) {
    let newList = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) {
        newList.todos.add(todo);
      }
    });
    return newList;
  }
  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }
  allDone() {
    return this.filter(todo => todo.isDone());

  }
  allNotDone() {
    return this.filter(todo => !todo.isDone());
    return newList;
  }
  markDone(title) {
    let currTodo = this.findByTitle(title);
    if(currTodo !== undefined) {
      currTodo.markDone();
    }
  }
  markAllDone(){
    this.forEach(todo => todo.markDone());
  }
  markAllUndone(){
    this.forEach(todo => todo.markUndone());
  }
  toArray() {
    return this.todos.slice();
  }
}
