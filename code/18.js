给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
注意：
答案中不可以包含重复的四元组。

示例：
给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return []
    nums = nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j === i + 1 || nums[j] !== nums[j - 1]) {
                    const t = target - nums[i] - nums[j];
                    let [l, r] = [j + 1, nums.length - 1]
                    while (l < r) {
                        if (nums[l] + nums[r] > t) {
                            r--;
                        } else if (nums[l] + nums[r] < t) {
                            l++
                        } else {
                            res.push([nums[i], nums[j], nums[l++], nums[r++]])
                            while (l < r && nums[l] === nums[l - 1]) { l++; }
                            while (l < r && nums[r] === nums[r + 1]) { r--; }
                        }
                    }
                }
            }
        }
    }
    return res
};
