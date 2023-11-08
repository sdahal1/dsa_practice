class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    // your solution here
    const newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
    }else{
      this.last.next = newNode;
    }
    this.last = newNode;
    return this;
  }

  dequeue() {
    // your solution here
    if(this.first){
      const dequeuedNode = this.first;
      this.first = dequeuedNode.next;
      if(dequeuedNode === this.last){
        this.last = null;
      }
      return dequeuedNode.value;
    }
  }
}

module.exports = Queue;
