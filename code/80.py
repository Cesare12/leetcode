# 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

# 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

# 示例 1：

# 输入：nums = [1,1,1,2,2,3]
# 输出：5, nums = [1,1,2,2,3]
# 解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。 不需要考虑数组中超出新长度后面的元素。
# 示例 2：

# 输入：nums = [0,0,1,1,1,1,2,3,3]
# 输出：7, nums = [0,0,1,1,2,3,3]
# 解释：函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。 不需要考虑数组中超出新长度后面的元素。

# 分步，在一个循环里，先算cnt，再赋值
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        cnt = 1
        index = -1
        for num in nums:
            if index >= 0:
                if nums[index] == num:
                    cnt += 1
                else:
                    cnt = 1

            if cnt <= 2:
                index += 1
                nums[index] = num
                
        return index + 1
      
# 快慢指针，比上面的解法慢一点
class Solution(object):
  def removeDuplicates(self, nums):
      slow = 0
      for fast in range(len(nums)):
          if slow < 2 or nums[fast] != nums[slow - 2]:
              nums[slow] = nums[fast]
              slow += 1
      return slow
