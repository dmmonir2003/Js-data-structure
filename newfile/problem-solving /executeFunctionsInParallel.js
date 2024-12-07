function executeFunctionsInParallel(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    let isRejected = false;

    functions.forEach((func, index) => {
      func()
        .then((value) => {
          if (isRejected) return;

          results[index] = value; // Store the resolved value in the correct order
          resolvedCount += 1;

          if (resolvedCount === functions.length) {
            resolve(results); // Resolve when all functions have resolved
          }
        })
        .catch((error) => {
          if (!isRejected) {
            isRejected = true; // Ensure only the first rejection is handled
            reject(error); // Reject with the first rejection reason
          }
        });
    });

    // Edge case: Empty array of functions
    if (functions.length === 0) {
      resolve([]);
    }
  });
}

// Example usage
const asyncFunc1 = () => new Promise((resolve) => setTimeout(() => resolve("Result 1"), 100));
const asyncFunc2 = () => new Promise((resolve) => setTimeout(() => resolve("Result 2"), 200));
const asyncFunc3 = () => new Promise((_, reject) => setTimeout(() => reject("Error in func3"), 150));

executeFunctionsInParallel([asyncFunc1, asyncFunc2, asyncFunc3])
  .then((results) => console.log("Resolved with:", results))
  .catch((error) => console.log("Rejected with:", error));