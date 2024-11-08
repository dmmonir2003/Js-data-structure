function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    const total = functions.length;

    functions.forEach((fn, index) => {
      fn()
        .then((value) => {
          results[index] = value; // Store the resolved value in the correct index
          resolvedCount++;

          // If all functions have resolved, resolve the main promise with the results
          if (resolvedCount === total) {
            resolve(results);
          }
        })
        .catch((error) => {
          // If any promise rejects, reject the main promise with the same error
          reject(error);
        });
    });
  });
}