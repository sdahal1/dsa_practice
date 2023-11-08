/**
 * Node is used to store values in a LinkedList
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkedList class holds a reference to the `head` node.
 */

class LinkedList {
  constructor(){
    this.head = null;
  }
  /**
   * The number of elements in the linked list.
   *
   * @returns {number}
   *   the number of elements in the linked list.
   */

  get length() {
    let count = 0;
    let runner = this.head;
    while(runner){
      count++;
      runner = runner.next;
    }
    return count;
  }

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @returns {*|null}
   *  the first node where `isMatch(node, index) === true` or null if no match is found.
   */
  find(isMatch=(node,idx)=>index === this.length-1) {
    let index = 0;
    let runner = this.head;
    while(runner){
      if(isMatch(runner,index)){
        return runner;
      }
      index++
      runner = runner.next;
    }
    return null;
  }

  /**
   * Insert the value after a matched node in the list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @param value
   *  the value to add.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   *
   * @throws 'No match found.'
   *  if list is not empty and no matching element is found.
   */
  insert(value, isMatch = (node, index) => index === this.length - 1) {
    // console.log({value, this:this})
    if(!this.head){
      const nodeToInsert = new Node(value)
      this.head = nodeToInsert;
      return this;
    }

    const prevNode = this.find(isMatch);
    if(prevNode === null){
      throw "No match found.";
    }

    const nodeToInsert = new Node(value, prevNode.next)
    prevNode.next = nodeToInsert;
    return this;
  }

  /**
   * Insert a new value at the head of the list.
   * @param value
   *  the new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */

  insertAtHead(value) {
    // This is a new function that you will need to implement.
    const newNode = new Node(value, this.head)
    this.head = newNode;
    return this;
  }

  /**
   * Remove the first node where `isMatch(node, index) === true`.
   *
   * @param isMatch
   *  function that returns true if the current node matches the node to be removed.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */
  remove(isMatch) {
    if(!this.head) throw "nothing to remove";

    if(isMatch(this.head,0)){
      const node = this.head;
      this.head = this.head.next;
      return node.value;
    }

    let runner = this.head;
    let index = 0;
    let previous = null;
    while(runner){
      if(isMatch(runner,index)){
        previous.next = runner.next;
        runner.next = null;
        return runner.value;
      }
      previous = runner;
      runner = runner.next;
      index++
    }
    return null;
  }
}

module.exports = LinkedList;