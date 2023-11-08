/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  //have pointers set for xPrev and yPrev
  if(!list.head || x === y) return list;

  let xPrev = null;
  let yPrev = null;
  let runner = list.head;

  while(runner){
    if(runner.next === x) xPrev = runner;
    
    if(runner.next === y) yPrev = runner;
    
    if(xPrev && yPrev) break;

    runner = runner.next;
  }

  let afterY = y.next;
  if(!xPrev && yPrev){
    y.next = list.head.next;
    yPrev.next = list.head;
    list.head.next = afterY;
    list.head = y;
  }
  if(!yPrev && xPrev){
    list.head = x;
    const temp = y.next;
    y.next = x.next;
    x.next = temp;
    xPrev.next = y;
  }
  if(xPrev && yPrev){
    xPrev.next = y;
    y.next = x.next;
    yPrev.next = x;
    x.next = afterY;
  }
  return list;
}

module.exports = swap;
