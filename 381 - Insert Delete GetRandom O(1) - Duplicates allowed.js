/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.d_count = new Map()
    this.d_index = new Map()
    this.d_reverse = new Map()
    this.d_store = []
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let count = this.d_count.get(val) || 0;
    this.d_count.set(val, count + 1);
    this.d_reverse.set(this.d_index.size, val + "#" + count);
    this.d_index.set(val + "#" + count, this.d_index.size);
    this.d_store.push(val);
    return count === 0 ? true : false;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (!this.d_index.has(val + "#" + 0)) {
        return false;
    }

    let count = this.d_count.get(val);
    let index = this.d_index.get(val + "#" + (count - 1));
    let reverse = this.d_reverse.get(this.d_index.size - 1);
    this.d_store[index] = this.d_store[this.d_index.size - 1];
    this.d_index.set(reverse, index);
    this.d_reverse.set(index, reverse);

    this.d_store.splice(this.d_index.size - 1, 1);
    this.d_reverse.delete(this.d_index.size);
    this.d_index.delete(val + "#" + (count - 1));
    count === 0 ? this.d_count.delete(val) : this.d_count.set(val, count - 1);
    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    let index = Math.floor(Math.random() * this.d_index.size);
    return this.d_store[index];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
