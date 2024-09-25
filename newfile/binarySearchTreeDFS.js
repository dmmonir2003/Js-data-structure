/*

// Binary Search Tree Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a node in the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper function to insert a node in the correct position
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

  // Depth-First Search: In-Order Traversal (Left, Root, Right)
  inOrder(root = this.root) {
    if (root !== null) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // Depth-First Search: Pre-Order Traversal (Root, Left, Right)
  preOrder(root = this.root) {
    if (root !== null) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // Depth-First Search: Post-Order Traversal (Left, Right, Root)
  postOrder(root = this.root) {
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

// Example Usage:
const bst = new BinarySearchTree();

// Insert values into the BST
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);


// Perform DFS traversals
console.log('In-Order Traversal:');
bst.inOrder();   // Output: 2, 5, 7, 10, 12, 15, 20

console.log('Pre-Order Traversal:');
bst.preOrder();  // Output: 10, 5, 2, 7, 15, 12, 20

console.log('Post-Order Traversal:');
bst.postOrder(); // Output: 2, 7, 5, 12, 20, 15, 10

*/