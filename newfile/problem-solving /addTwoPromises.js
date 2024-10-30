function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(([result1, result2]) => result1 + result2);
}