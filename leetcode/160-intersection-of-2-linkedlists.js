/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === headB) return headA;
    let runnerA = headA;
    let runnerB = headB;
    let aCount = 0;
    let bCount = 0;
    while(runnerA){
        aCount++;
        runnerA = runnerA.next;
    }
    while(runnerB){
        bCount++;
        runnerB = runnerB.next;
    }
    const difference = Math.abs(aCount-bCount); //2
    runnerA = headA;
    runnerB = headB;
    if(aCount>bCount){
        let count = 0;
        while(count < difference){
            runnerA = runnerA.next;
            count++;
        }
    }else if(bCount>aCount){
        let count = 0;
        while(count < difference){
            runnerB = runnerB.next;
            count++;
        }
    }
    if(runnerA === runnerB) return runnerA;
    while(runnerA.next && runnerB.next){
        if(runnerA.next === runnerB.next) return runnerA.next;
        runnerA = runnerA.next;
        runnerB = runnerB.next;
    }
    return null;
};