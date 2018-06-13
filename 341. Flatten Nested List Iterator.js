/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.d_list = nestedList;
    this.d_index = 0;
    this.d_subIter = null;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    if (this.d_list.length === this.d_index) {
        return false;
    }
    
    let elem = this.d_list[this.d_index];
    if (elem.isInteger()) {
        return true;
    }
    
    if (this.d_subIter === null) {
        this.d_subIter = new NestedIterator(elem.getList());
    }
    
    if (this.d_subIter.hasNext()) {
        return true;
    }
    this.d_index += 1;
    this.d_subIter = null;
    return this.hasNext();
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    let elem = this.d_list[this.d_index]; 
    if (elem.isInteger()) {
        this.d_index += 1;
        return elem.getInteger();
    }

    return this.d_subIter.next();   
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
