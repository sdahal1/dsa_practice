/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode{
  constructor(val,left,right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}
/* 
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Example 1: 
  Input: nums = [-10,-3,0,5,9]
  Output: [0,-3,9,-10,null,5]
  Explanation: [0,-10,5,null,-3,null,9] is also accepted:

*/

var sortedArrayToBST = function(nums) {
  //get middle number and insert as root of tree
  nums = getMiddle(nums);
  console.log(nums)
  const rootNode = new TreeNode(nums[0]);
  for(let i= 1; i<nums.length; i++){
    const num = nums[i];
    insertToTree(rootNode, num);
  }
  return rootNode;

};

function getMiddle(nums=[], result = []){
  if(nums.length === 0) return;
  let middleIdx = Math.floor(nums.length/2);
  result.push(nums[middleIdx]);
  getMiddle(nums.slice(0,middleIdx), result)
  getMiddle(nums.slice(middleIdx+1), result)
  return result
}

function insertToTree(node,val){
  let runner = node;
  while(runner){
    if(val > runner.val && runner.right === null){
      runner.right = new TreeNode(val);
    }else if(val < runner.val && runner.left === null){
      runner.left = new TreeNode(val)
    }else if(val > runner.val && runner.right !== null){
      runner = runner.right;
    }else{
      runner = runner.left
    }
  }
  return node
}


// const node1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(3);
// const node4 = new TreeNode(4);
// const node5 = new TreeNode(5);
// const node6 = new TreeNode(6);
// const node7 = new TreeNode(7);

// node5.left = node3;
// node5.right = node7;
// node7.left = node6;
// node3.left = node1;
// node1.right = node2;
// node3.right = node4;

// console.log(sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11,12,13]))
