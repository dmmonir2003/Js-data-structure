// Node structure for the Binary Search Tree
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

    // Insert a new node in the tree
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // BFS method to traverse the tree level by level
    bfs() {
        const result = [];
        const queue = [];
        
        if (this.root !== null) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode.value);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }
}

