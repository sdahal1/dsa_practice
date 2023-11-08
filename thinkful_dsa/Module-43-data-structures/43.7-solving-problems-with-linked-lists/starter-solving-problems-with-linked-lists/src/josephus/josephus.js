//m === number to skip
const LinkedList = require("../lib/linkedList")
function josephus(list, m) {
  //make the list circular
  let runner = list.head;
  while(runner.next!== null){ //iterate to the last node and have runner end up at the last node (tail)
    runner = runner.next;
  }
  runner.next = list.head;
  
  runner = list.head;
  let count = 1;
  while(runner.next){
    if(count === m){
      console.log("executing someone", runner.next.value)
      if(runner.next.next === runner){ //only 2 nodes left
        runner.next = null;
        break;
      }
      runner.next = runner.next.next;
      count = 0;
    }
    count++;
    runner = runner.next;
  }
  return runner.value;
}


module.exports = josephus;
