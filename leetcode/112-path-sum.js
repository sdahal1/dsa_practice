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
 * @param {number} targetSum
 * @return {boolean}
 */

/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

var hasPathSum = function(root, targetSum, count=0, flag=false) {
    if(!root) return flag;
    count += root.val;
    if(targetSum === count && !root.left && !root.right){
        flag = true;
    }
    if(flag === true) return true;
    flag = hasPathSum(root.left, targetSum, count, flag)
    if(flag === true) return true;
    flag = hasPathSum(root.right, targetSum, count, flag)
    return flag

};