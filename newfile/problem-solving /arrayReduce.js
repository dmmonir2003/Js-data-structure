function reduce(nums, fn, init) {
    let result = init;

    // Loop through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]); // Apply fn to accumulate the result
    }

    return result;
}


const nums = [1, 2, 3, 4];
const fn = (accum, curr) => accum + curr;
const init = 0;

console.log(reduce(nums, fn, init)); // Output: 10