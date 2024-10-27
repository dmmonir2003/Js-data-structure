/*
 
  
 * @param {Function[]} functions
 * @return {Function}
 
var compose = function(functions) {
    // If the array is empty, return the identity function
    if (functions.length === 0) {
        return (x) => x;
    }

    // Return a composed function
    return function(x) {
        // Use reduceRight to apply functions from right to left
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

const fn = compose([x => x + 1, x => x * 2, x => x - 3]);
console.log(fn(4));  // Output: 5

// Explanation:
// 1. Starting with input 4.
// 2. Apply the last function: 4 - 3 = 1
// 3. Apply the second function: 1 * 2 = 2
// 4. Apply the first function: 2 + 1 = 3


*/