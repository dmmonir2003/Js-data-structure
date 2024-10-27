var argumentsLength = function(...args) {
    return args.length;
};

console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength("a", "b", "c", "d")); // Output: 4
console.log(argumentsLength()); // Output: 0