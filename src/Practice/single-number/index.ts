/*
  Đề bài: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.

  Example 1:
    Input: nums = [2,2,1]
    Output: 1
  Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4
  Example 3:
    Input: nums = [1]
    Output: 1

  Constraints:
    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.
  
  Giải thích đề bài:
    Cho một mảng số nguyên không rỗng, mỗi phần tử xuất hiện 2 lần ngoại trừ 1 phần tử. Tìm phần tử đó. Yêu cầu: độ phức tạp O(n) và không dùng thêm bộ nhớ
  
  Thuật toán:
  1. Dùng hash map để lưu số lần xuất hiện của từng phần tử
  2. Duyệt qua từng phần tử trong mảng nums
  3. Nếu phần tử đó đã có trong hash map thì tăng số lần xuất hiện lên 1
  4. Nếu phần tử đó chưa có trong hash map thì thêm vào với số lần xuất hiện là 1
  5. Duyệt qua từng phần tử trong hash map
  6. Nếu số lần xuất hiện là 1 thì return phần tử đó
*/

export function singleNumber(nums: number[]) {
  const map = new Map<number, number>();

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, (map.get(num) as number) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (const [key, value] of map) {
    if (value === 1) return key;
  }

  return -1;
}

/*
  Độ phức tạp:
    - Time complexity: O(n)
    - Space complexity: O(n)
  
  Giải bằng tay:
    nums = [2, 2, 1]
    map = {
      2: 2,
      1: 1
    }

    key = 2, value = 2
    return 1

*/
