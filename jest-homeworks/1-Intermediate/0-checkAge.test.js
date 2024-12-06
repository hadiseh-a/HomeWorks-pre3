const checkAge = require("./0-checkAge");
describe("testing check Age", () => {
  test("check greater than age", () => {
    expect(checkAge(17)).toBeUndefined();
  });
  test("check less than age", () => {
    expect(checkAge(20)).not.toBeUndefined();
  });
});
