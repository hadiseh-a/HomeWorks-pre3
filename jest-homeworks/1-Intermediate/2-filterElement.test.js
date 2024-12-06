const filterElement = require("./2-filterElement");
describe("test filtering element", () => {
  test("test for empty array", () => {
    expect(filterElement(["hey"], "grape")).toEqual([]);
  });
  test("test for finding", () => {
    expect(filterElement(["apple", "somthin", "else"], "apple")).toEqual(["apple"]);
  });
});
