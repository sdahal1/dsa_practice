/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insertAtHead(value);
  }

  pop() {
    return this.linkedList.remove((node,index)=>index===0)
  }

  peek() {
    if(this.linkedList.head){
      return this.linkedList.head.value;
    }
    return null;
  }

  isEmpty() {
    return !this.linkedList.head;
  }
}

module.exports = Stack;
