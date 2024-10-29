function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);  // Create a unique key for each set of arguments
    if (cache.has(key)) {
      return cache.get(key);  // Return cached result if it exists
    }

    const result = fn(...args);  // Call the function if result is not cached
    cache.set(key, result);  // Cache the result
    return result;
  };
}

// Define the functions we want to memoize
const sum = (a, b) => a + b;

const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);

// Memoize the functions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

