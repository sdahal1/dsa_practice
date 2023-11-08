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
  const result = []
  function traverse(root) {
    if(!root) return result;
    traverse(root.left);
    traverse(root.right);
    result.push(root.val)
  }
  traverse(root);
  return result;
};

var postorderTraversal = function (root, result = []) {
  if(!root) return result;
  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);
  result.push(root.val)
  return result;
};
