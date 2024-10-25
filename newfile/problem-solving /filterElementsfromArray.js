

function filter(arr, fn) {
    const filteredArr = [];
    
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Apply the filtering function fn to each element and index
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);  // If true, push the element to filteredArr
        }
    }
    
    return filteredArr;
}


// Example usage:
const arr = [1, 2, 3, 4, 5];
const fn = (num, i) => num % 2 === 0; // Filter even numbers

const result = filter(arr, fn);
console.log(result); // Output: [2, 4]