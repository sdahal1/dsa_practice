const Queue = require('./lib/queue');

const binary = (max) => {
  const queue = new Queue();
  queue.enqueue("1");
  const result = [];
  for(let i = 1; i<=max; i++){
    const dequeuedVal = queue.dequeue();
    result.push(dequeuedVal);
    queue.enqueue(dequeuedVal+"0");
    queue.enqueue(dequeuedVal+"1");
  }
  return result;
};

module.exports = binary;
