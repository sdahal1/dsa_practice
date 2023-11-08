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

  enqueue(value){
    const newNode = new Node(value);
    if(this.first){
      this.last.next = newNode;
    }else{
      this.first = newNode;
    }
    this.last = newNode;
    return this;
  }

  dequeue(){
    if(this.first){
      const removedNode = this.first;
      this.first = removedNode.next;
      if(this.first === this.last){
        this.last = null;
      }
      return removedNode.value
    }
    return null;
  }
}

