function isEmpty(value) {
  // Check if the value is an object or array
  if (typeof value === 'object' && value !== null) {
    // Check if it's an array and has no elements
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    // Check if it's an object and has no key-value pairs
    return Object.keys(value).length === 0;
  }
  return false; // If not an object or array, return false
}