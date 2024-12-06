const getAverage = require("./1-getAverage");
describe("testin get Average", () => {
  test("test greater than", () => {
    expect(getAverage(6,7,6)).toBeGreaterThan(5);
  });
  test("test less than", () => {
    expect(getAverage(2,3,4)).toBeLessThan(5);
  });
  test("test equal", () => {
    expect(getAverage(4,5,6)).toEqual(5);
  });
});
