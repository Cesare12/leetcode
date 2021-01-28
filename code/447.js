给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
返回平面上所有回旋镖的数量。

示例 1：
输入：points = [[0,0],[1,0],[2,0]]
输出：2
解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]

示例 2：
输入：points = [[1,1],[2,2],[3,3]]
输出：2

示例 3：
输入：points = [[1,1]]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-boomerangs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} points
 * @return {number}
 */
var distance = function (a, b) {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
}

var numberOfBoomerangs = function (points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        let record = new Map();
        for (let j = 0; j < points.length; j++) {
            if (j === i) continue
            let dis = distance(points[i], points[j]);
            let tmp = record.get(dis)
            if (tmp) {
                record.set(dis, ++tmp);
            } else {
                record.set(dis, 1);
            }
        }
        record.forEach((e) => {
            if (e >= 2) {
                res += e * (e - 1);
            }
        })
    }
    return res
};
