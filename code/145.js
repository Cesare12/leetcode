给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let res = [];
    var traversal = function (node) {
        if (node) {
            traversal(node.left);
            traversal(node.right);
            res.push(node.val);
        }
    }
    traversal(root)
    return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function Command(s, node) {
    this.s = s;
    this.node = node;
}

var postorderTraversal = function (root) {
    if (!root) return []

    let stack = [];
    let res = [];

    stack.push(new Command('go', root));
    while (stack.length !== 0) {
        let command = stack.pop();
        if (command.s === 'print') {
            res.push(command.node.val);
        } else {
            stack.push(new Command('print', command.node));
            if (command.node.right)
                stack.push(new Command('go', command.node.right));
            if (command.node.left)
                stack.push(new Command('go', command.node.left));
        }
    }

    return res
};
