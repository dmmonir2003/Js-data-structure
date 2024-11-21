// Enhance the Array prototype
Array.prototype.groupBy = function (fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item); // Generate the key using the provided callback function
    if (!grouped[key]) {
      grouped[key] = []; // Initialize the array for the key if it doesn't exist
    }
    grouped[key].push(item); // Add the item to the appropriate group
    return grouped;
  }, {});
};

// Example Usage
const arr = [1, 2, 3, 4, 5, 6];
const grouped = arr.groupBy((num) => (num % 2 === 0 ? "even" : "odd"));
console.log(grouped);
// Output:
// {
//   odd: [1, 3, 5],
//   even: [2, 4, 6]
// }

