function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
    
    
    // Example usage:
try {
    expect(5).toBe(5); // true
    expect(5).notToBe(10); // true
    expect(5).toBe(3); // throws "Not Equal"
} catch (error) {
    console.error(error.message);
}