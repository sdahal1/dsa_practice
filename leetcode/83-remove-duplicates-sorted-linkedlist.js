/* 
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 
1->1->1->2->3->3

1--->2->3->
        r 

*/
var deleteDuplicates = function (head) {
  if(!head) return null;
  let r = head;
  while (r.next) {
    if (r.next.val === r.val) {
      r.next = r.next.next;
    } else {
      r = r.next;
    }
  }
  return head;
};
