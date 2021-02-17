给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

示例 1：
输入：root = [1,null,2,3]
输出：[1,2,3]

示例 2：
输入：root = []
输出：[]

示例 3：
输入：root = [1]
输出：[1]

示例 4：
输入：root = [1,2]
输出：[1,2]

示例 5：
输入：root = [1,null,2]
输出：[1,2]
 
提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
var preorderTraversal = function (root) {
    let res = [];
    var traversal = function (node) {
        if (node) {
            res.push(node.val);
            traversal(node.left);
            traversal(node.right);
        }
    }
    traversal(root)
    return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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

var preorderTraversal = function (root) {
    let stack = [];
    let res = [];
    if (!root) return []
    stack.push(new Command('go', root));

    while (stack.length !== 0) {
        let command = stack.pop();
        if (command.s === 'print') {
            res.push(command.node.val)
        } else {
            if (command.node.right)
                stack.push(new Command('go', command.node.right))
            if (command.node.left)
                stack.push(new Command('go', command.node.left))
            stack.push(new Command('print', command.node))
        }
    }
    return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];
    let stack = [];

    if (root) stack.push(root)
    while (stack.length > 0) {
        const curNode = stack.pop()
        res.push(curNode.val)

        if (curNode.right !== null) {
            stack.push(curNode.right)
        }
        if (curNode.left !== null) {
            stack.push(curNode.left)
        }
    }
    return res
};
