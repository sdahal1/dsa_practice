/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.
  let runner = sortedLinkedList.head;
  while(runner){
    while(runner.next && runner.value === runner.next.value){
      runner.next = runner.next.next;
    }
    runner = runner.next;
  }
  return sortedLinkedList;
}

module.exports = removeDuplicates;
