class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SLL{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insert(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  print(){
    let runner = this.head;
    let result = [];
    while(runner){
      result.push(runner.value);
      runner = runner.next;
    }
    return result;
  }

  reverse(){
    let runner = this.head;
    let prevNode = null;
    while(runner){
      let temp = runner.next;
      runner.next = prevNode;
      prevNode = runner;
      runner = temp;
    }
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
}


const sll1 = new SLL();
sll1.insert(5).insert(10).insert(15).insert(20).insert(25);
console.log(sll1.reverse().print());
