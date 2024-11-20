/*
// Extend the Array prototype
Array.prototype.last = function() {
  // Check if the array is empty
  if (this.length === 0) {
    return -1; // Return -1 for empty arrays
  }
  // Return the last element of the array
  return this[this.length - 1];
};

// Example usage
const arr1 = [1, 2, 3];
console.log(arr1.last()); // Output: 3const arr2 = [];
console.log(arr2.last()); // Output: -1
*/