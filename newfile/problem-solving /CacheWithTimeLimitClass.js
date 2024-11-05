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