

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a node into the BST
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
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

  // Delete a node from the BST
  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }

  deleteNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
      return node;
    } else {
      // Case 1: No child
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // Case 2: One child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Case 3: Two children
      const aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.deleteNode(node.right, aux.data);
      return node;
    }
  }

  // Helper method to find the minimum node in a tree/subtree
  findMinNode(node) {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }

  // Helper method to print the tree in order
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // Get root node of the tree
  getRootNode() {
    return this.root;
  }
}