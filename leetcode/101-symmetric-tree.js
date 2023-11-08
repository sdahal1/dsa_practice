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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function helper(p,q){
    if(!p && !q) return true;
    if(!p || !q || p.val !== q.val) return false;
    const x = helper(p.left, q.right)
    const y = helper(p.right, q.left)
    return x && y
  }
  return helper(root.left, root.right);
};


//write a function that calculates the total cost of items in an array