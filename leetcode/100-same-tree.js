/* 
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q, flag = true) {
  console.log("running", p, q, flag);
  console.log(undefined === null);
  if (p === null && q === null) return true;
  if ((p === null && q !== null) || (p !== null && q === null)) return false;
  if (p.val !== q.val) return false;
  //if(flag === false) return false;

  flag = isSameTree(p.left, q.left, flag);
  if (flag === false) return flag;

  flag = isSameTree(p.right, q.right, flag);

  return flag;
};


var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null || p.val !== q.val) return false;

  let x = isSameTree(p.left, q.left);
  let y = isSameTree(p.right, q.right);
  return x && y
};