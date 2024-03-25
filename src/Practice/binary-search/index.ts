/*
  Đề bài:
    Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
    You must write an algorithm with O(log n) runtime complexity.

  Example 1:
    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4
  Example 2:
    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1
    Explanation: 2 does not exist in nums so return -1

  Constraints:
    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.

  Giải thích đề bài:
    Tìm kiếm một số trong mảng đã sắp xếp theo thứ tự tăng dần. Nếu tìm thấy thì trả về vị trí của số đó, nếu không tìm thấy thì trả về -1
    Yêu cầu: độ phức tạp thuật toán phải là O(log n)

  Giải thuật:
    - Sử dụng thuật toán tìm kiếm nhị phân
    - Độ phức tạp thuật toán: O(log n)
*/

export function binarySearch(numList: number[], target: number) {
  let left = 0;
  let right = numList.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numList[mid] === target) {
      return mid;
    } else if (numList[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

/*
  Ví dụ giả bằng tay:
    nums = [-1,0,3,5,9,12], target = 9
    left = 0, right = 5, mid = 2, nums[mid] = 3 < target = 9 => left = mid + 1 = 3
    left = 3, right = 5, mid = 4, nums[mid] = 9 = target => return mid = 4

*/
