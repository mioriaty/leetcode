class ListNode<T> {
  value: T | null;
  next: ListNode<T> | null;

  constructor(val: T | null, _next: ListNode<T> | null = null) {
    this.next = _next;
    this.value = val;
  }
}

class SinglyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printLinkedList(): void {
    let current = this.head;
    if (!current) {
      console.log("Empty List");
    } else {
      while (current) {
        console.log(current.value);
        current = current.next;

        if (!current) {
          console.log("null");
        } else {
          console.log("->");
        }
      }
    }
  }
}

// create example list
const list = new SinglyLinkedList<number>();

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);

n1.next = n2;
n2.next = n3;

list.head = n1;
list.tail = n3;
list.length = 3;

list.printLinkedList();