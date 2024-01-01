import { isValid } from "../index";

describe("isValid", () => {
  it("should return true for valid parentheses", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
  });

  it("should return false for invalid parentheses", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("]")).toBe(false);
  });
});
