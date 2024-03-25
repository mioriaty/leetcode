/*
  Đề bài: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

  Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
  
  Example 2:  
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

  Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

  Giải thích đề bài:
    Tìm kiếm chuỗi chung dài nhất trong mảng các chuỗi. Nếu không có chuỗi chung nào thì return ''. Mảng strs chỉ chứa các ký tự thường
  
  Thuật toán:
    1. Dùng Array.sort để sắp xếp mảng theo thứ tự từ a - z
    2. Khởi tạo 3 biến là: firstWord, lastWord và biến count = 0
    3. Lấy firstWord = strs[0], lastWord = strs[strs.length - 1]
    4. Dùng vòng lặp while để kiểm tra từng ký tự của firstWord và lastWord tại count. Nếu bằng nhau thì count++, nếu khác nhau thì break
    5. Nếu count = 0 thì return ''
    6. Nếu count > 0 thì return firstWord.slice(0, count)
*/
export const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  strs.sort();

  const firstWord = strs[0];
  const lastWord = strs[strs.length - 1];
  let count = 0;

  while (count < firstWord.length) {
    if (firstWord.charAt(count) === lastWord.charAt(count)) {
      count++;
    } else {
      break;
    }
  }

  return count === 0 ? "" : firstWord.slice(0, count);
};

/*
  Code chạy bằng tay:
  strs = ["flower","flow","flight"]
  strs.sort() = ["flight", "flow", "flower"]
  firstWord = "flower"
  lastWord = "flow"
  count = 0

  count = 0
  firstWord.charAt(count) = "f"
  lastWord.charAt(count) = "f"
  count = 1

  count = 1
  firstWord.charAt(count) = "l"
  lastWord.charAt(count) = "l"
  count = 2

  count = 2
  firstWord.charAt(count) = "i"
  lastWord.charAt(count) = "o"
  break
*/ 