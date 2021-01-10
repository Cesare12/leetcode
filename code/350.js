给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

示例 2:
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = []
  let record = new Map();

  nums1.map((item) => {
    if (record[item] > 0)
      record[item]++;
    else
      record[item] = 1;
  });

  nums2.map((item) => {
    if (record[item] > 0) {
      res.push(item);
      record[item]--;
    }
  });

  return res;
};
