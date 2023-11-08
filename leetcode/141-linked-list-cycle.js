/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/* 
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

3-2-0-4
  |___|



*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
  if(!head || !head.next) return false;
  let fast = head.next;
  let slow = head;
  while(fast.next){
    if(fast === slow) return true;
    fast = fast.next.next
    slow = slow.next
    if(!fast) return false;
  }
  return false;
};


const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = null;  // This creates a cycle


const hasCycleResult = hasCycle(node1);
console.log("Has cycle:", hasCycleResult);
