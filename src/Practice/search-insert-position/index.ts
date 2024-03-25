/*
  Đề bài:
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
    You must write an algorithm with O(log n) runtime complexity.
  
  Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2
  Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1
  Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4

  Constraints:
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104
  
  Giải thích đề bài:
    Tìm kiếm target trong mảng nums. Nếu tìm thấy thì return index, nếu không tìm thấy thì return index mà nó sẽ được insert vào mảng nums. Mảng nums đã được sắp xếp theo thứ tự tăng dần

  Thuật toán:
  1. Dùng Binary Search để tìm kiếm
  2. Nếu tìm thấy thì return index
  3. Nếu không tìm thấy thì return left
*/ 
export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    if (nums[mid] > target) right = mid - 1;
  }
  
  return left;
};

/*
  Chạy code bằng tay:
  nums = [1, 3, 5, 6], target = 5
  left = 0
  right = 3 
  mid = 1
  nums[mid] = 3
  nums[mid] < target => left = mid + 1 = 2

  left = 2
  right = 3
  mid = 2
  nums[mid] = 5
  nums[mid] = target => return mid = 2

  nums = [1, 3, 5, 6], target = 2
  left = 0
  right = 3
  mid = 1
  nums[mid] = 3
  nums[mid] > target => right = mid - 1 = 0

  left = 0
  right = 0
  mid = 0
  nums[mid] = 1
  nums[mid] < target => left = mid + 1 = 1

  left = 1
  right = 0
  break
  return left = 1
*/ 