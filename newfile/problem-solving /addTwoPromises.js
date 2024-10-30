/*
function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(([result1, result2]) => result1 + result2);
}

const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);

addTwoPromises(promise1, promise2).then((sum) => {
  console.log(sum); // Output: 15
});

*/