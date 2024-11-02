function cancellable(fn, args, t) {
  // Set a timeout to execute `fn` after `t` milliseconds
  const timeoutId = setTimeout(() => fn(...args), t);

  // Return the cancel function
  return function cancelFn() {
    clearTimeout(timeoutId); // Cancel the timeout if this function is invoked
  };
}


// Usage example:
const fn = (a, b) => console.log(a + b); // example function to run
const args = [2, 3]; // arguments to pass to `fn`
const delay = 1000; // time delay in ms

const cancelFn = cancellable(fn, args, delay); // create the cancellable timeout
setTimeout(cancelFn, 500); // call cancel after 500ms, before fn executes