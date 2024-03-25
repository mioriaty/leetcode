/*
  Đề bài: 
    Given head, the head of a linked list, determine if the linked list has a cycle in it.
    There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
    Return true if there is a cycle in the linked list. Otherwise, return false.

  Example 1:
    Input: head = [3,2,0,-4], pos = 1
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
  Example 2:
    Input: head = [1,2], pos = 0
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
  Example 3:
    Input: head = [1], pos = -1
    Output: false
    Explanation: There is no cycle in the linked list.
  
  Constraints:
    The number of the nodes in the list is in the range [0, 104].
    -105 <= Node.val <= 105
    pos is -1 or a valid index in the linked-list.

  Follow up: 
    Can you solve it using O(1) (i.e. constant) memory?

  Giải thích đề bài:
    Cho head của 1 linked list, kiểm tra xem linked list có cycle hay không. Return true nếu có, false nếu không có cycle trong linked list đó

  Thuật toán:
    1. Dùng 2 con trỏ slow và fast
    2. slow = head, fast = head.next
    3. Nếu slow === fast thì return true
    4. Nếu fast === null hoặc fast.next === null thì return false
    5. slow = slow.next, fast = fast.next.next
    6. Quay lại bước 3

*/

function hasCycle(head: ListNode<number> | null): boolean {
  if (head === null) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;

    slow = slow.next as ListNode<number>;
    fast = fast.next.next as ListNode<number>;
  }

  return true;
}

/*
  Độ phức tạp:
    - Time complexity: O(n)
    - Space complexity: O(1)
  
  Giải bằng tay:
    head = [3 , 2, 0, -4], pos = 1;

    slow = head = 3
    fast = head.next = 2

    
*/
