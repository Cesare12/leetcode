给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：
输入：s = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let res = nums.length + 1;
  let [l, r] = [0, -1];
  let sum = 0;

  while (l < nums.length) {
    if (r < nums.length - 1 && sum < s) {
      sum += nums[++r];
    } else {
      sum -= nums[l++];
    }
    sum >= s && (res = Math.min(r - l + 1, res));
  }
  if (res === nums.length + 1) {
    return 0;
  }
  return res;
};
