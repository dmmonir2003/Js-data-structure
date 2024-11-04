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