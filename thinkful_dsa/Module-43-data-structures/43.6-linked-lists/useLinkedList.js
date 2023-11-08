const LinkedList = require("./linkedList");

const sll1 = new LinkedList();

// sll1.insertAtHead("One");
// sll1.insertAtHead(2);
// sll1.insertAtHead(4);

sll1.insert(5).insert(50).insert(500)
// console.log('find 50', sll1.find((node)=>node.value===50))

// sll1.find((node)=>node.value===50).value = "50 cent";

sll1.insert(2,(node,index)=>node.value===5)

// console.log('find at index 1', sll1.find((node,index)=>index === 1));

// console.log(sll1.findWithPrevious((node,idx)=>idx===sll1.length-1));

sll1.display()
// sll1.remove((node,idx)=>node.value===2).display()
// sll1.remove((node,idx)=>idx===0).display()
// console.log(sll1.length)