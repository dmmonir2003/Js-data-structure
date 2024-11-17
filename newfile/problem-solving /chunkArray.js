function chunkArray(arr, size) {
  // Initialize an empty array to store the chunks
  const chunked = [];
  
  // Loop through the array, slicing it into chunks of the given size
  for (let i = 0; i < arr.length; i += size) {
    // Slice the array from the current index to the current index + size
    const chunk = arr.slice(i, i + size);
    chunked.push(chunk); // Add the chunk to the chunked array
  }
  
  return chunked; // Return the chunked array
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const size = 3;
console.log(chunkArray(arr, size));
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]