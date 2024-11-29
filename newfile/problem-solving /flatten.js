function flatten(arr, n) {
  // Helper function to flatten the array
  function flattenHelper(array, depth) {
    if (depth === 0) {
      // If depth is 0, return the array as is
      return array;
    }

    // Flatten the array one level deep
    let result = [];
    for (let item of array) {
      if (Array.isArray(item)) {
        // If item is an array, recursively flatten it with depth - 1
        result = result.concat(flattenHelper(item, depth - 1));
      } else {
        // If item is not an array, just add it to the result
        result.push(item);
      }
    }
    return result;
  }
  
  
  // Call the helper function with initial depth n
  return flattenHelper(arr, n);
}

// Example usage:
const nestedArray = [1, [2, [3, [4, [5]]]]];
const depth = 2;

console.log(flatten(nestedArray, depth));
// Output: [1, 2, 3, [4, [5]]]