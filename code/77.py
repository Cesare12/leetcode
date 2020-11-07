给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combinations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

class Solution:
    def back(self, n, k, start, cur, res):
        if len(cur) == k:
            res.append(cur[:])
            return

        for i in range(start, n + 1):
            cur.append(i)
            self.back(n, k, i + 1, cur, res)
            cur.pop()

    def combine(self, n, k):
        res = []
        cur = []
        self.back(n, k, 1, cur, res)
        return res
