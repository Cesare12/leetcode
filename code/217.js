给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let record = new Set();
    for (let i = 0; i < nums.length; i++) {
        record.add(nums[i]);
        if (record.size !== i + 1)
            return true
    }
    return false
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums = nums.sort();
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1])
            return true
    }
    return false
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let record = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (record.get(nums[i]))
            return true
        record.set(nums[i], 1)

    }
    return false
};
