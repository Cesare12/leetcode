给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。

示例 1:
输入: [[1,1],[2,2],[3,3]]
输出: 3
解释:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4

示例 2:
输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
输出: 4
解释:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-points-on-a-line
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} points
 * @return {number}
 */
var isLine = function (x, y) {
    let k = (y[1] - x[1]) / (y[0] - x[0]);
    let b = (y[0] * x[1] - x[0] * y[1]) / (y[0] - x[0]);

    if (k === -Infinity) k = Infinity;
    if (b === -Infinity) b = Infinity;
    return k + '' + b;
}

var maxPoints = function (points) {
    if (points.length === 0) return 0
    if (points.length === 1) return 1
    let res = 0;
    let record = new Map();
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (points[j][0] - points[i][0] < 10000000 && points[j][1] - points[i][1] < 10000000) {
                let kb = isLine(points[i], points[j])
                if (kb === 'InfinityInfinity') {
                    kb = 'InfinityInfinity+' + points[i][0];
                }
                if (kb === 'NaNNaN') {
                    kb = 'NaNNaN' + points[i][0] + points[i][1]
                }
                let tmp = record.get(kb);
                if (tmp) {
                    if (tmp.indexOf(i) === -1) tmp.push(i);
                    if (tmp.indexOf(j) === -1) tmp.push(j);
                    record.set(kb, tmp);
                } else {
                    record.set(kb, [i, j]);
                }
            }

        }
    }
    record.forEach((e) => {
        res = Math.max(e.length, res);
    })
    return res;
};
