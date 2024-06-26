/*
 Đề bài: 
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

 Ví dụ:
  Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

  Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]

  Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
  => use hash map => O(n)

  Giải thích đề bài:
    Tìm 2 số trong mảng nums sao cho tổng của chúng bằng target. Mảng nums có thể chứa các số trùng nhau. Trả về index của 2 số đó.

  Thuật toán:
    1. Khởi tạo 1 hash map
    2. Dùng vòng lặp for để duyệt từng phần tử của mảng nums
    3. Tại mỗi phần tử nums[i], tính diff = target - nums[i]
    4. Nếu map[diff] !== undefined thì return [map[diff], i]
    5. Nếu không thì map[nums[i]] = i
    6. Return []
*/
type HashMap = { [key: number]: number };

export const twoSum = (nums: number[], target: number): number[] => {
  const map: HashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[num] = i;
  }
  return [];
};
/*
  Chạy code bằng tay:
  nums = [2, 7, 11, 15], target = 9
  map = {}

  i = 0
  num = 2
  diff = 7
  map[7] = undefined
  map[2] = 0

  map = { 2: 0 }
  i = 1
  num = 7
  diff = 2
  map[2] = 0
  return [0, 1]
*/ 