/**
 * Sorts an array based on the output of a function applied to its elements.
 * @param {Array} arr - The array to be sorted.
 * @param {Function} fn - The function that determines the sort order.
 * @returns {Array} - The sorted array.
 */
function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}
