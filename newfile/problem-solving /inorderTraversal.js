/*function* inorderTraversal(arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element); // Recursively traverse nested arrays
    } else {
      yield element; // Yield integers
    }
  }
}
*/

// Example usage:
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const generator = inorderTraversal(nestedArray);

console.log([...generator]); // Output: [1, 2, 3, 4, 5, 6, 7]

