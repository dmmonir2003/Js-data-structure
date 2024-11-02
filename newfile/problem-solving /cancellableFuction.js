function cancellable(fn, args, t) {
  // Set a timeout to execute `fn` after `t` milliseconds
  const timeoutId = setTimeout(() => fn(...args), t);

  // Return the cancel function
  return function cancelFn() {
    clearTimeout(timeoutId); // Cancel the timeout if this function is invoked
  };
}