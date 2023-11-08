/* 

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

class ListNode{
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const node1 = new ListNode(1,null);
const node2 = new ListNode(2,null);
const node3 = new ListNode(4,null);

const node4 = new ListNode(1,null);
const node5 = new ListNode(3,null);
const node6 = new ListNode(4,null);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;


//this one creates a new list rather than doing it in place
var mergeTwoLists = function (list1, list2) {
  if(!list1) return list2;
  if(!list2) return list1;
  let a = list1.val <= list2.val? list1: list2;
  let b = list1 === a? list2 : list1;

  let result = new ListNode();
  let prevNode = result;
  while(list1 && list2){
    if(list1.val <= list2.val){
      prevNode.next = new ListNode(list1.val, null);
      prevNode = prevNode.next;
      list1 = list1.next
    }else{
      prevNode.next = new ListNode(list2.val, null);
      prevNode = prevNode.next;
      list2 = list2.next;
    }
  }
  while(list1){
    prevNode.next = new ListNode(list1.val, null);
    prevNode = prevNode.next;
    list1 = list1.next;
  }
  while(list2){
    prevNode.next = new ListNode(list2.val, null);;
    prevNode = prevNode.next;
    list2 = list2.next;
  }
  return result.next;
};

console.log(mergeTwoLists(node1,node4))
