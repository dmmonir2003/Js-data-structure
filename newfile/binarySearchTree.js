// Binary Search Tree Node class
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

  // Insert a new value into the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper function to insert node in correct position
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

  // Search for a value in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper function to search for a node
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true; // Node found
    }
  }

  // In-order traversal (left -> root -> right)
  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  // Pre-order traversal (root -> left -> right)
  preorder(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Post-order traversal (left -> right -> root)
  postorder(node = this.root) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }

  // Find the minimum value node
  findMinNode(node = this.root) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // Find the maximum value node
  findMaxNode(node = this.root) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }
}