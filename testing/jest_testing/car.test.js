const Car = require("./car");

describe("The Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });
  test("has four wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });
  test.skip("bad wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(3);
  });
});

