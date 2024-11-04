function timeLimit(fn, t) {
  return async function(...args) {
    // Create a promise that rejects if the time limit is exceeded
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject("Time Limit Exceeded"), t)
    );

    // Run the provided function and race it against the timeout promise
    return Promise.race([fn(...args), timeoutPromise]);
  };
}


// Sample async function
async function exampleAsyncFunction(arg) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Result: ${arg}`), 1000); // Resolves after 1 second
  });
}

// Wrap exampleAsyncFunction with time limit of 500 ms
const limitedFunction = timeLimit(exampleAsyncFunction, 500);

limitedFunction("test")
  .then(console.log)
  .catch(console.error); // Should output "Time Limit Exceeded" since it exceeds 500 ms