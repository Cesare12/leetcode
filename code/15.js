给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

示例 2：
输入：nums = []
输出：[]

示例 3：
输入：nums = [0]
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    return nums.reduce((res, item, index) => {
        if (index === 0 || item !== nums[index - 1]) {
            const target = 0 - item;
            let [i, j] = [index + 1, nums.length - 1]
            while (i < j) {
                if (nums[i] + nums[j] > target) {
                    j--;
                } else if (nums[i] + nums[j] < target) {
                    i++
                } else {
                    res.push([item, nums[i++], nums[j--]])
                    while (i < j && nums[i] === nums[i-1]) { i++ }
                    while (i < j && nums[j] === nums[j+1]) { j-- }
                }
            }
        }
        return res
    }, [])
};
