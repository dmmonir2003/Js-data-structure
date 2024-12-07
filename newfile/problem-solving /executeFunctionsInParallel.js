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