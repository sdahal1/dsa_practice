const cycle = (list) => {
  if(!list.head) return false;

  let slowRunner = list.head;
  let fastRunner = list.head.next;
 
    while(fastRunner && fastRunner.next){
      slowRunner = slowRunner.next;
      fastRunner = fastRunner.next.next;
      if(slowRunner === fastRunner) return true;
    }
  
  return false;

};

module.exports = cycle;
