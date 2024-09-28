// Node class for the tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the tree
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Find the maximum value in the tree
    findMax() {
        if (this.root === null) {
            return null;
        }
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(15);
bst.insert(30);


console.log("Max value in the tree: ", bst.findMax()); // Output: 30