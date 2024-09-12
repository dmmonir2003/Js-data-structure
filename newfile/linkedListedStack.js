// Node class to create new nodes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class using a linked list
class Stack {
  constructor() {
    this.top = null; // The top of the stack
    this.size = 0; // Size of the stack
  }

  // Push a value onto the stack
  push(value) {
    const newNode = new Node(value);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.size++;
  }

  // Pop a value from the stack
  pop() {
    if (!this.top) return null; // Stack is empty
    const valueToPop = this.top.value;
    this.top = this.top.next;
    this.size--;
    return valueToPop;
  }

  // Peek at the top value of the stack
  peek() {
    if (!this.top) return null; // Stack is empty
    return this.top.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the stack
  getSize() {
    return this.size;
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop());  // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.getSize()); // Output: 2


