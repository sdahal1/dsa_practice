const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value)
    return this;
  }

  dequeue() {
    return this.linkedList.remove((node,index)=>node === this.linkedList.head)
    // return this;
  }

  peek() {
    if(this.linkedList.head){
      return this.linkedList.head.value;
    }
    return null;
  }

  isEmpty() {
    return !this.linkedList.head
  }
}

module.exports = Queue;
