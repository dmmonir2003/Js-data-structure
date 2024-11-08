/*
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

// Example 1
promiseAll([
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]).then(result => console.log(result)) // Output: [5]
  .catch(error => console.error(error));

// Example 2
promiseAll([
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
  () => new Promise((_, reject) => setTimeout(() => reject("Error"), 100))
]).then(result => console.log(result))
  .catch(error => console.error(error)); // Output: "Error"

// Example 3
promiseAll([
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]).then(result => console.log(result)) // Output: [4, 10, 16]
  .catch(error => console.error(error));
  */