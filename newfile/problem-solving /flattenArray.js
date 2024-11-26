function flattenArray(arr, depth) {
  const result = [];

  function flattenHelper(array, currentDepth) {
    for (const element of array) {
      if (Array.isArray(element) && currentDepth < depth) {
        // Recursively flatten if the depth allows
        flattenHelper(element, currentDepth + 1);
      } else {
        // Push the element to the result if it's not an array or depth exceeds
        result.push(element);
      }
    }
  }

  flattenHelper(arr, 0);
  return result;
}

