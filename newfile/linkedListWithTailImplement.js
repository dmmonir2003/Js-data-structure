/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a node to the tail of the list
  addToTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Add a node to the head of the list
  addToHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove a node from the head
  removeHead() {
    if (!this.head) return null;
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.head) {
      this.tail = null;
    }
    return removedNode.value;
  }

  // Print the list
  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}

// Example usage
const list = new LinkedList();
list.addToTail(10);
list.addToTail(20);
list.addToTail(30);
list.addToHead(5);
list.printList(); // Output: 5 -> 10 -> 20 -> 30 -> null

list.removeHead();
list.printList(); // Output: 10 -> 20 -> 30 -> null

*/