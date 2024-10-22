function transformArray(arr, fn) {
  let returnedArray = [];

  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i));
  }

  return returnedArray;
}


// Example usage:
const arr = [1, 2, 3, 4];
const fn = (element, index) => element * index;

const result = transformArray(arr, fn);
console.log(result); // Output: [0, 2, 6, 12]