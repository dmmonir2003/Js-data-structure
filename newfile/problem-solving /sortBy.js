/**
 * Sorts an array based on the output of a function applied to its elements.
 * @param {Array} arr - The array to be sorted.
 * @param {Function} fn - The function that determines the sort order.
 * @returns {Array} - The sorted array.
 */
function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}



// Example usage:
const arr = [5, 3, 8, 1];
const fn = (x) => x; // Sorting by the value itself
console.log(sortBy(arr, fn)); // Output: [1, 3, 5, 8]

// Another example: Sorting by the square of the values
const arr2 = [-2, -1, 0, 1, 2];
const fn2 = (x) => x * x;
console.log(sortBy(arr2, fn2)); // Output: [0, -1, 1, -2, 2]