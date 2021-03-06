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

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = [];
    function back(start, cur) {
        if (cur.length === k) {
            res.push(cur.slice())
            return
        }
        for (let i = start; i <= n; i++) {
            cur.push(i)
            back(i + 1, cur);
            cur.pop()
        }
    }
    back(1, []);
    return res
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const back = (start, cur) => {
        if (cur.length === k) {
            res.push(cur.slice())
            return
        }
        for (let i = start; i <= n - (k - cur.length) + 1; i++) {
            cur.push(i)
            back(i + 1, cur);
            cur.pop()
        }
    }
    back(1, []);
    return res
};

