/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // If the array is empty, return the identity function
    if (functions.length === 0) {
        return (x) => x;
    }

    // Return a composed function
    return function(x) {
        // Use reduceRight to apply functions from right to left
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};