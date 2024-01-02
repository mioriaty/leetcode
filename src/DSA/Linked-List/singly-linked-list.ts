class ListNode<T> {
  value: T | null;
  next: ListNode<T> | null;

  constructor(val: T | null, _next: ListNode<T> | null = null) {
    this.next = _next;
    this.value = val;
  }
}

class SinglyLinkedList<T> {
  constructor() {}

  printLinkedList(head: ListNode<T> | null): void {
    let current = head;
    if (!current) {
      console.log("Empty List");
    } else {
      while (current) {
        console.log(`${current.value} ->`);
        current = current.next;

        if (!current) {
          console.log("null");
        }
      }
    }
  }

  // Thêm phần tử vào đầu danh sách
  addToHead(value: T, headNode: ListNode<T> | null): ListNode<T> {
    const newNode = new ListNode(value);

    if (headNode !== null) {
      newNode.next = headNode;
      return newNode;
    }

    return newNode;
  }

  // Thêm phần tử vào cuối danh sách
  addToTail(value: T, headNode: ListNode<T> | null): ListNode<T> {
    const newNode = new ListNode(value);

    if (headNode === null) {
      return newNode;
    } else {
      // Xác định last: phần tử cuối cùng luôn trở vào NULL;
      let lastNode = headNode;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      // Khi đã tìm thấy last node thì gán next của last node bằng newNode
      lastNode.next = newNode;
    }

    // Trả về headNode, vì headNode vẫn là phần tử đầu tiên của danh sách
    return headNode;
  }

  // Thêm phần tử vào 1 index chỉ định
  addToIndex(
    value: T,
    index: number,
    headNode: ListNode<T> | null
  ): ListNode<T> {
    const newNode = new ListNode(value);

    if (headNode === null) {
      return newNode;
    }

    if (index === 0) {
      return this.addToHead(value, headNode);
    } else {
      // Tìm vị trí cần thêm
      let current = headNode;
      let count = 0;

      while (current.next !== null) {
        count++;
        if (count === index) {
          // Thực hiện add vào
          newNode.next = current.next;
          current.next = newNode;
          break;
        }
        current = current.next;
      }
    }

    return headNode;
  }

  // call main function
  main() {
    const list = new SinglyLinkedList<number>();

    let n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);

    n1.next = n2;
    n2.next = n3;

    // #Add to head
    n1 = list.addToHead(0, n1);

    // #Add to tail
    n1 = list.addToTail(4, n1);

    // #Add to index
    n1 = list.addToIndex(5, 3, n1);

    // print list
    list.printLinkedList(n1);
  }
}

// create example list
new SinglyLinkedList<number>().main();
