const sum = require("./2-sum2");
describe("testing sum", () => {
  test("testing errors", () => {
    expect(sum("a", 3)).toThrow("Input must be numbers");
  });
  test("testing sum of positive numbers",()=>{
    expect(sum(2,3)).toBe(5)
  })
  test("testing sum of negetive numbers",()=>{
    expect(sum(-1,-2)).toBe(-3)
  })
});
