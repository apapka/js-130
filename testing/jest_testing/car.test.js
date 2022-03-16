const Car = require("./car");

describe("The Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });
  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });
  test.skip("bad wheels", () => {
    expect(car.wheels).toBe(3);
  });
  test("two newly created cars are object equa" , () => {
    let car2 = new Car();
    expect(car).toEqual(car2);
  });
  test("a newly created car does not have doors", () => {
    expect(car.doors).toBeUndefined();
  });
  
});

