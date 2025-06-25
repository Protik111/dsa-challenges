class HashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

  //hash function
  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % max;
  }
}

module.exports = HashTable;
