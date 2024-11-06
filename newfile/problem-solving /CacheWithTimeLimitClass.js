/*
class CacheWithTimeLimit {
    constructor() {
        this.cache = new Map(); // Store key-value with expiration time
    }

    // Sets the value for a key with a specific expiration duration
    set(key, value, duration) {
        const currentTime = Date.now();
        const expirationTime = currentTime + duration;
        
        const alreadyExists = this.cache.has(key) && this.cache.get(key).expiration > currentTime;

        // Store the value and expiration time for the key
        this.cache.set(key, { value, expiration: expirationTime });
        
        return alreadyExists;
    }

    // Gets the value for a key if it has not expired, otherwise returns -1
    get(key) {
        const currentTime = Date.now();

        if (this.cache.has(key)) {
            const entry = this.cache.get(key);
            
            if (entry.expiration > currentTime) {
                return entry.value;
            } else {
                // Remove the key if it has expired
                this.cache.delete(key);
            }
        }
        
        return -1;
    }

    // Counts all un-expired keys
    count() {
        const currentTime = Date.now();
        let unexpiredCount = 0;

        for (const [key, entry] of this.cache) {
            if (entry.expiration > currentTime) {
                unexpiredCount++;
            } else {
                // Remove expired keys
                this.cache.delete(key);
            }
        }
        
        return unexpiredCount;
    }
}


// Example testing code
const cache = new CacheWithTimeLimit();

// Test set method with key that expires in 1 second (1000 ms)
console.log("Set key 1:", cache.set(1, 100, 1000)); // Expected output: false (new key)

// Test get method to retrieve the key before it expires
console.log("Get key 1 (before expiration):", cache.get(1)); // Expected output: 100

// Wait for 1.5 seconds to let the key expire
setTimeout(() => {
    console.log("Get key 1 (after expiration):", cache.get(1)); // Expected output: -1 (key expired)

    // Test count method (should be 0 after expiration)
    console.log("Count (after key 1 expired):", cache.count()); // Expected output: 0

    // Set new keys 2 and 3 with a 3-second expiration
    console.log("Set key 2:", cache.set(2, 200, 3000)); // Expected output: false
    console.log("Set key 3:", cache.set(3, 300, 3000)); // Expected output: false

    // Check count immediately after setting
    console.log("Count (after setting keys 2 and 3):", cache.count()); // Expected output: 2

    // Wait again for keys 2 and 3 to expire
    setTimeout(() => {
        console.log("Count (after keys 2 and 3 expired):", cache.count()); // Expected output: 0
    }, 3500);
}, 1500);
*/