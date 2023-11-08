const { BST } = require("./bst_insert_and_remove_2");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.head) return null;
    const dequeuedVal = this.head.value;
    // console.log("head value", this.head.value)
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }else{
      this.head = this.head.next;
    }
    this.length--;
    return dequeuedVal;
  }
}

// const q = new Queue();
// q.enqueue(5).enqueue(10).enqueue(15).enqueue(20);

const breadthFirstSearch = (root) => {
  const values = []
  const queue = new Queue();
  queue.enqueue(root);
  while (queue.head) {
    console.log(queue.head)
    let node = queue.dequeue();
    values.push(node.value);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
    // node = queue.dequeue();
    // if(values.length > 10) break;
  }
  return values;
};


const bst1 = new BST(10);
bst1
  .insert(5)
  .insert(15)
  .insert(2)
  .insert(6)
  .insert(1)
  .insert(13)
  .insert(22)
  .insert(12)
  .insert(14);
console.log(breadthFirstSearch(bst1));
