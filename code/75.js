给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-colors
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 计数排序的思路
// 对整个数组遍历了两遍
// 时间复杂度: O(n)
// 空间复杂度: O(k), k为元素的取值范围
var sortColors = function (nums) {
    var count = new Array(3).fill(0);
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++;
    }

    var index = 0;
    for (let i = 0; i < count[0]; i++)
        nums[index++] = 0;
    for (let i = 0; i < count[1]; i++)
        nums[index++] = 1;
    for (let i = 0; i < count[2]; i++)
        nums[index++] = 2;
};


// 三路快速排序的思想
// 对整个数组只遍历了一遍
// 时间复杂度: O(n)
// 空间复杂度: O(1)
var sortColors = function (nums) {
    var zero = -1;//[0...zero] = 0
    var two = nums.length;//[two...n-1] = 2
    var i = 0;
    while (i < two) {
        if (nums[i] === 0) {
            zero++;
            [nums[i], nums[zero]] = [nums[zero], nums[i]];
            i++;
        } else if (nums[i] === 1) {
            i++;
        } else if (nums[i] === 2) {
            two--;
            [nums[i], nums[two]] = [nums[two], nums[i]];
        }
    }
};
