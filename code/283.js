给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 时间复杂度: O(n)
// 空间复杂度: O(1)
var moveZeroes = function(nums) {
    let index = 0;
    for(let i in nums){
        if(nums[i]){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            index++;
        }
    }
};


//optimize
var moveZeroes = function(nums) {
    let index = 0;
    for(let i in nums){
        if(nums[i]){
            if(i !== index){
                [nums[i], nums[index]] = [nums[index], nums[i]];
                index++;
            } else {
                index++;
            }
        }
    }
};

