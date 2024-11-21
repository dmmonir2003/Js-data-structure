/ Enhance the Array prototype
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
