function createCounter(init) {
  let currentValue = init;

  return {
    increment: function() {
      currentValue++;
      return currentValue;
    },
    decrement: function() {
      currentValue--;
      return currentValue;
    },
    reset: function() {
      currentValue = init;
      return currentValue;
    }
  };
}

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset());     // 5