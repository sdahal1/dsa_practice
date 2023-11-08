class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * The `LinkedList` class holds a reference to the `head` node and has functions that update the list.
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * The number of nodes in the linked list
   *
   * @returns {number}
   *   The number of nodes in the linked list
   */

  get length() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }
    return result;
  }

  /**
   * Insert a new value at the head of the list
   * @param value
   *  The new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained
   */
  insertAtHead(value) {
    this.head = new Node(value, this.head);
    return this;
  }

  //isMatch defaults to returning you the last node in the list by using the index
  insert(value, isMatch = (node,index)=>index===this.length-1){
    if(!this.head){
      this.insertAtHead(value)
      return this;
    }
    const previousNode = this.find(isMatch);
    if(!previousNode) throw new Error("No match found.");
    
    previousNode.next = new Node(value, previousNode.next);
    return this;
  }

  find(isMatch){
    return this.findWithPrevious(isMatch)[0];
  }
  // =(node, index)=>index === this.length-1
  findWithPrevious(isMatch){
    if(!this.head) return null;
    let runner = this.head;
    let index = 0;
    let previous = null;
    while(runner){
      if(isMatch(runner, index)){
        return [runner, previous]
      }
      index++;
      previous = runner;
      runner = runner.next;
    }
    return [null, null];
  }

  remove(isMatch){
    if(!this.head) return this;
    let [nodeToRemove,prevNode] = this.findWithPrevious(isMatch);
    console.log([nodeToRemove,prevNode])
    if(prevNode === null && nodeToRemove === null){
      console.log("did not find node to remove")
    }
    else if(prevNode === null) {
      this.head = this.head.next;
    }else{
      prevNode.next = nodeToRemove.next;
    }
    return this;
  }

  display(){
    let runner = this.head;
    while(runner){
      console.log(runner.value);
      runner = runner.next;
    }
  }

}

module.exports = LinkedList;