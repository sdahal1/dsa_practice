const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list=new LinkedList()) {
  if(!list.head) return list;
  let runner = list.head;
  let previousNode = null;
  while(runner){
    let nextNode = runner.next;
    runner.next = previousNode;
    previousNode = runner;
    runner = nextNode;
  }
  list.head = previousNode;
  return list;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list, node = list.head, previousNode=null) {
  if(!node){
    list.head = previousNode;
    return list;
  }
  let nextNode = node.next;
  node.next = previousNode;
  return reverseRecursive(list, nextNode, node);
}

module.exports = { reverseIterative, reverseRecursive };
