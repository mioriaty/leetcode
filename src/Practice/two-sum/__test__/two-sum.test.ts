import { twoSum } from "../index";

describe("twoSum", () => {
  it("should return correct indices for target sum", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it("should return empty array if no two numbers sum to target", () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    const result = twoSum(nums, target);
    expect(result).toEqual([]);
  });

  it("should handle negative numbers", () => {
    const nums = [-1, -2, -3, -4, -5];
    const target = -8;
    const result = twoSum(nums, target);
    expect(result).toEqual([2, 4]);
  });

  it("should handle array with one element", () => {
    const nums = [1];
    const target = 1;
    const result = twoSum(nums, target);
    expect(result).toEqual([]);
  });
});
