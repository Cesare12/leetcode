给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。
列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。

示例 1:
输入: [[1,1],2,[1,1]]
输出: [1,1,2,1,1]
解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。

示例 2:
输入: [1,[4,[6]]]
输出: [1,4,6]
解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flatten-nested-list-iterator
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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
var NestedIterator = function (nestedList) {
    this.list = [];
    this.resetList(nestedList);
};

NestedIterator.prototype.resetList = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isInteger()) {
            this.list.push(arr[i].getInteger())
        } else {
            this.resetList(arr[i].getList());
        }
    }
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.list.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.list.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/



/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stack = [];
    this.res = [];

    if (!nestedList) return []

    this.stack.push({ s: 'list', val: nestedList })

    while (this.stack.length !== 0) {
        const { s, val } = this.stack.pop();
        if (s === 'integer') {
            this.res.unshift(val)
        } else {
            for (let i = 0; i < val.length; i++) {
                if (val[i].isInteger()) {
                    this.stack.push({ s: 'integer', val: val[i].getInteger() })
                } else {
                    this.stack.push({ s: 'list', val: val[i].getList() })
                }
            }
        }
    }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.res.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.res.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
