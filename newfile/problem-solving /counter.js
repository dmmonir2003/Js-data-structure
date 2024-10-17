function createCounter(n) {
  return function() {
    return n++;
  };
}





const counter = createCounter(5); // Initialize the counter with n = 5
console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7