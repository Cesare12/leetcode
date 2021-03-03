找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：
所有数字都是正整数。
解集不能包含重复的组合。 

示例 1:
输入: k = 3, n = 7
输出: [[1,2,4]]

示例 2:
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const sum = (nunms) => {
    let x = 0;
    for (let i = 0; i < nunms.length; i++) {
        x += nunms[i];
    }
    return x
}

var combinationSum3 = function (k, n) {
    const res = [];
    const back = (start, cur) => {
        if (cur.length === k) {
            if (sum(cur) === n) {
                res.push(cur.slice())
            }
            return
        }
        for (let i = start; i <= 9; i++) {
            cur.push(i)
            back(i + 1, cur)
            cur.pop()
        }
    }
    back(1, [])
    return res
};

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const res = [];
    const back = (start, cur, sum) => {
        if (cur.length === k) {
            if (sum === n) {
                res.push(cur.slice())
            }
            return
        }
        
        for (let i = start; i <= 9; i++) {
            cur.push(i)
            sum += i
            back(i + 1, cur, sum)
            sum -= cur.pop()
        }
    }
    back(1, [], 0)
    return res
};
