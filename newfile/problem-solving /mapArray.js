function mapArray(arr, fn) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  
  return result;
}

// Example usage:
const arr = [1, 2, 3, 4];
const fn = (element, index) => element * 2 + index;

const transformedArray = mapArray(arr, fn);
console.log(transformedArray); // Output: [2, 5, 8, 11]

