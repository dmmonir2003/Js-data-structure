/*

function intervalCancellation(fn, args, t, cancelTimeMs) {
    // Call the function immediately with provided arguments
    fn(...args);

    // Set up an interval to call the function repeatedly every `t` milliseconds
    const intervalId = setInterval(() => fn(...args), t);

    // Define the cancel function
    const cancelFn = () => clearInterval(intervalId);

    // Schedule the cancel function to run after `cancelTimeMs` milliseconds
    setTimeout(cancelFn, cancelTimeMs);

    // Return the cancel function in case you want to call it manually
    return cancelFn;
}


// Example usage:
function exampleFn(arg) {
    console.log(arg);
}

const args = ["Hello, world!"];
const t = 1000; // 1 second
const cancelTimeMs = 5000; // 5 seconds

intervalCancellation(exampleFn, args, t, cancelTimeMs);

*/