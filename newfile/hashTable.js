class HashTable {
  constructor() {
    this.table = new Array(100);  // Create a table with 100 buckets (size can vary)
  }

  // Hash function to compute an index for a key
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // Insert a key-value pair into the hashtable
  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  // Retrieve a value by key
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  // Remove a key-value pair
  remove(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter(item => item[0] !== key);
    }
  }
}