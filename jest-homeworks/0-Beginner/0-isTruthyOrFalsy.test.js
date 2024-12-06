const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");

describe("testing truthy or falsy", () => {
  test("test truthy values", () => {
    expect(isTruthyOrFalsy(true)).toBeTruthy();
  });
  test("test falsy values", () => {
    expect(isTruthyOrFalsy("")).toBeFalsy();
  });
});
