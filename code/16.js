给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

示例：
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 
提示：
3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let [l, r] = [i + 1, nums.length - 1]
            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                res = (Math.abs(res - target) > Math.abs(sum - target)) ? sum : res;
                if (sum > target) {
                    r--;
                    while (nums[r] === nums[r + 1]) r--;
                } else if (sum < target) {
                    l++
                    while (nums[l] === nums[l - 1]) l++;
                } else {
                    return sum
                }
            }
        }
    }
    return res
};
