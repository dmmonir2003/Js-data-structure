/*

// Node class to represent each element in the doubly linked list
class Node {
    constructor(value) {
        this.value = value;   // Holds the value of the node
        this.next = null;     // Points to the next node
        this.prev = null;     // Points to the previous node
    }
}

// Doubly Linked List class
class DoublyLinkedList {
    constructor() {
        this.head = null;     // Points to the first node
        this.tail = null;     // Points to the last node
        this.length = 0;      // Length of the list
    }

    // Add a node to the end of the list
    append(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // Link the old tail to the new node
            newNode.prev = this.tail; // Link the new node back to the old tail
            this.tail = newNode;      // Update the tail to the new node
        }

        this.length++;
    }

    // Add a node to the beginning of the list
    prepend(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode; // Link the old head to the new node
            newNode.next = this.head; // Link the new node to the old head
            this.head = newNode;      // Update the head to the new node
        }

        this.length++;
    }

    // Print the list in forward direction
    printList() {
        let currentNode = this.head;
        const result = [];
        while (currentNode !== null) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(result);
    }

    // Remove a node from the end of the list
    removeLast() {
        if (!this.tail) return null;

        const removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedNode;
    }

    // Remove a node from the beginning of the list
    removeFirst() {
        if (!this.head) return null;

        const removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removedNode;
    }
}

// Example usage
const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.printList(); // Output: [5, 10, 20, 30]

list.removeLast();
list.printList(); // Output: [5, 10, 20]

list.removeFirst();
list.printList(); // Output: [10, 20]

*/