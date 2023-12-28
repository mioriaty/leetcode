/*
  Đề bài:
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.
    3. Every close bracket has a corresponding open bracket of the same type.

  Example 1:
    Input: s = "()"
    Output: true
  Example 2:
    Input: s = "()[]{}"
    Output: true
  Example 3:
    Input: s = "(]"
    Output: false

  Giải thuật:
    - Sử dụng stack để lưu các ký tự mở ngoặc
    - Duyệt qua từng ký tự trong chuỗi
    - Nếu là ký tự mở ngoặc thì push vào stack
    - Nếu là ký tự đóng ngoặc thì lấy ký tự ở đầu stack ra so sánh
      - Nếu không phải cặp ngoặc thì return false
      - Nếu là cặp ngoặc thì pop khỏi stack
    - Sau khi duyệt hết chuỗi, nếu stack còn phần tử thì return false, ngược lại return true
*/

type Stack = string[];

export const isValid = (s: string): boolean => {
  const stack: Stack = [];
  const openTag = ["(", "{", "["];

  const match: Record<string, string> = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of s) {
    if (openTag.includes(char)) {
      stack.push(char);
    } else {
      const openChar = stack.pop();
      if (match[char] !== openChar) {
        return false;
      }
    }
  }
  return true;
};
