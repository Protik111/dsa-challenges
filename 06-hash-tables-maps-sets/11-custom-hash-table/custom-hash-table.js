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

  //set a value in the hash table
  set(key, value) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (!inserted) {
        this.storage[index].push([[key, value]]);
      }
    }
  }

  //get the value for the key
  get(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  //remove a key-value pair from the hash table
  remove(key) {
    const index = this._hash(key, this.limit)
    
    if(this.storage[index]) {
      if(this.storage[index].length === 1 && this.storage[index][0][0] === key) {
        delete this.storage[index]
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if(this.storage[index][i][0] === key) {
            delete this.storage[index][i]
          }
        }
      }
    }
  }
}

module.exports = HashTable;
