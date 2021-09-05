# 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

# 示例:

# 输入: [0,1,0,3,12]
# 输出: [1,3,12,0,0]

# 来源：力扣（LeetCode）
# 链接：https://leetcode-cn.com/problems/move-zeroes
# 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 在原数组上移动0，用k作为标记指针

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = 0
        for i, num in enumerate(nums):
            if num != 0:
                nums[i], nums[k] = nums[k], nums[i]
                k += 1
        return nums
