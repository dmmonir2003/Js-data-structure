/*
function once(fn) {
  let called = false;  // Track if the function has been called

  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);  // Call and return the result of fn if not called before
    }
    return undefined;  // Return undefined on subsequent calls
  };
}


// Example usage
const exampleFunction = (x) => x * 2;
const singleCallFunction = once(exampleFunction);

console.log(singleCallFunction(5));  // Output: 10 (5 * 2)
console.log(singleCallFunction(5));  // Output: undefined (already called once)

*/