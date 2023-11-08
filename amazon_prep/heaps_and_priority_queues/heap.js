//storing heaps in an array, there is a special formula
  //for any index of an array (n), its children are (n * 2 +1), and (n * 2 + 2)
  //for any child at index (n), its parent is at index (n-1)/2

class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }

  insert(value){
    //push the value to the end of the values array;
    this.values.push(value);
    //then bubble up the value so that its in its final spot;
    let currentIdx = this.values.length - 1;
    let parentIdx = Math.floor((currentIdx-1)/2);
    while(this.values[currentIdx] > this.values[parentIdx]){
      [[this.values[currentIdx]], [this.values[parentIdx]]] = [[this.values[parentIdx]], [this.values[currentIdx]]];
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx-1)/2);
    }
    return this;
  }

  
  extractMax(){
    [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]];
    const max = this.values.pop();
    let currentIdx = 0;
    let leftIdx = (currentIdx*2)+1;
    let rightIdx = (currentIdx*2)+2;
    while(this.values[currentIdx] < this.values[leftIdx] || this.values[currentIdx] < this.values[rightIdx] ){
      if(this.values[leftIdx]>this.values[rightIdx] || rightIdx >= this.values.length){
        [this.values[currentIdx], this.values[leftIdx]] = [this.values[leftIdx], this.values[currentIdx]];
        currentIdx = leftIdx;
      }else{
        [this.values[currentIdx], this.values[rightIdx]] = [this.values[rightIdx], this.values[currentIdx]];
        currentIdx = rightIdx;
      }
      leftIdx = (currentIdx*2)+1;
      rightIdx = (currentIdx*2)+2;
    }
    return max
  }
}


const heap1 = new MaxBinaryHeap();
heap1.insert(5).insert(10).insert(15).insert(20).insert(2).insert(50).insert(1).insert(3)
console.log(heap1.values)
console.log(heap1.extractMax())
console.log(heap1.extractMax())
console.log(heap1.extractMax())
console.log(heap1.extractMax())
console.log(heap1.extractMax())
// console.log(heap1.values)
console.log(heap1.extractMax())
console.log(heap1.extractMax())
console.log(heap1.extractMax())
// console.log(heap1.extractMax2())


