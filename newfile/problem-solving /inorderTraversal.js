function* inorderTraversal(arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element); // Recursively traverse nested arrays
    } else {
      yield element; // Yield integers
    }
  }
}