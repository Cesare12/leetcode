在整数数组 nums 中，是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，且满足 i 和 j 的差的绝对值也小于等于 ķ 。
如果存在则返回 true，不存在返回 false。

示例 1:
输入: nums = [1,2,3,1], k = 3, t = 0
输出: true

示例 2:
输入: nums = [1,0,1,1], k = 1, t = 2
输出: true

示例 3:
输入: nums = [1,5,9,1,5,9], k = 2, t = 3
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let record = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j of record) {
            if (Math.abs(nums[i] - j) <= t) {
                return true
            }
        }

        record.add(nums[i])

        if (record.size === k + 1)
            record.delete(nums[i - k])

    }
    return false
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
let getID = function (x, w) {
    return x < 0 ? parseInt((x + 1) / w - 1) : parseInt(x / w);
}
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (t < 0) return false;
    let record = new Map();
    let w = t + 1;
    for (let i = 0; i < nums.length; i++) {
        let m = getID(nums[i], w);
        if (record.has(m))
            return true

        if (record.has(m - 1) && Math.abs(record.get(m - 1) - nums[i]) < w)
            return true

        if (record.has(m + 1) && Math.abs(record.get(m + 1) - nums[i]) < w)
            return true

        record.set(m, nums[i]);
        if (i >= k) record.delete(getID(nums[i - k], w));

    }
    return false
};
