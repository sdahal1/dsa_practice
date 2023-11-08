const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
  if(!Object.keys(graph).length) return false;
  if(startUser === endUser) return true;

  const queue = new Queue();
  const visited = new Set();

  queue.enqueue(startUser);

  while(queue.first){
    const currentPerson = queue.dequeue();
    if(currentPerson === endUser) return true;
    visited.add(currentPerson)
    const currentPersonFollowing = graph[currentPerson];
    for(let following of currentPersonFollowing){
      if(!visited.has(following)){
        queue.enqueue(following);
      }
    }
  }

  return false;
  
  

};
//queue = [e]
//visited = [a,b,c,f]
//cp = d
//endUser = d

// const graph2 = {
//   A: ["B", "C"],
//   B: ["F", "D"],
//   C: ["E"],
//   D: ["C", "B"],
//   E: ["D", "F"],
//   F: [],
// };
// const graph1 = {
//   Alice: ["Bob", "Carl"],
//   Bob: ["Dave", "Fred"],
//   Carl: ["Eve"],
//   Dave: ["Carl", "Bob"],
//   Eve: ["Dave", "Fred"],
//   Fred: [],
// };



// console.log(connected(graph2, "A", "D")) //true




module.exports = connected;
