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