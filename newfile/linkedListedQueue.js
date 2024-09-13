class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // Points to the front of the queue
    this.rear = null;  // Points to the rear of the queue
    this.size = 0;     // Keeps track of the size of the queue
  }

  // Enqueue: Add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // Dequeue: Remove an element from the front of the queue
  dequeue() {
    if (!this.front) {
      return null; // Queue is empty
    }
    const dequeuedNode = this.front;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null; // If the queue is now empty
    }
    this.size--;
    return dequeuedNode.value;
  }

  // Peek: View the front element of the queue
  peek() {
    if (!this.front) {
      return null;
    }
    return this.front.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the queue
  getSize() {
    return this.size;
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.peek());    // Output: 20
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false