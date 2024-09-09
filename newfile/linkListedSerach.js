/*

// Node class representing each element in the linked list
class Node {
    constructor(value) {
        this.value = value; // data of the node
        this.next = null;   // pointer to the next node
    }
}

// Linked List class
class LinkedList {
    constructor() {
        this.head = null; // head of the list
    }

    // Method to add a new node to the list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode; // if list is empty, set head to new node
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next; // traverse to the end of the list
        }

        current.next = newNode; // set the next of the last node to the new node
    }

    // Method to search for a value in the linked list
    search(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return `Value ${value} found at index ${index}`;
            }
            current = current.next;
            index++;
        }

        return `Value ${value} not found`;
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log(list.search(20));  // Output: "Value 20 found at index 1"
console.log(list.search(40));  // Output: "Value 40 not found"

*/