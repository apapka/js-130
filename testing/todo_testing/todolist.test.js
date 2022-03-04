const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });
  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });
  test("calling toArray returns the list in array form", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });
  test("calling first returns first todo from list", () => {
    expect(list.first()).toEqual(todo1);
  });
  test("calling last returns last todo from list", () => {
    expect(list.last()).toEqual(todo3);
  })
  test("calling shift removes and returns the first item in the list", () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });
  test("calling pop removes and returns the last item in the list", () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });
  test("calling isDone returns true when all items in list are done, false otherwise", () => {
    expect(list.isDone()).toEqual(false);
    list.markAllDone();
    expect(list.isDone()).toEqual(true);
  });
  test("TypeError occurs when adding a non-Todo", () => {
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add("hi")).toThrow(TypeError);
  })
  test("itemAt returns the item at given index", () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  })
  test("markDoneAt raises a reference error if we specify an index w no element", () => {
    expect(() => list.markDoneAt(6)).toThrow(ReferenceError);
    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  })
  test("markUnDoneAt", () =>{
    expect(()=> list.markUndoneAt(6)).toThrow(ReferenceError);
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();
    list.markUndoneAt(1);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(true);
  });
  test("markAllDone", () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);

  });
  test("removeAt", () => {
    expect(()=> list.removeAt(6)).toThrow(ReferenceError);
    list.removeAt(1);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });
  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to the gym`;
  
    expect(list.toString()).toBe(string);
  });
  test('toString correctly marks done', () => {
    todo1.markDone();
    let string = `---- Today's Todos ----
    [X] Buy milk
    [ ] Clean room
    [ ] Go to the gym`;
  
    expect(list.toString()).toBe(string);
  });
  test('toString correctly marks ALL DONE', () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
    [X] Buy milk
    [X] Clean room
    [X] Go to the gym`;
  
    expect(list.toString()).toBe(string);
  });
  test('forEach iterates over the elements', () => {
    let result = [];
    list.forEach(todo => result.push(todo));
    expect(result).toEqual([todo1,todo2,todo3]);
  });
  test('filter returns a new TodoList object', () => {
    let result = [];
    todo1.markDone();
    result = list.filter(todo => todo.isDone());
    expect((result instanceof TodoList)).toEqual(true);
    expect((result.toArray())).toEqual([todo1]);
  })

  
});