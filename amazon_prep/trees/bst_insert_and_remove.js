class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // iterative is better than recursive b/c space complexity on worst case will be O(1) space rather than O(n) space
  insertIterative(value){
    let currentNode = this;
    while(true){
      if(value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = new BST(value);
          // return this;
          break;
        }else{
          currentNode = currentNode.left;
        }
      }
      else{
        if(currentNode.right === null){
          currentNode.right = new BST(value);
          // return this;
          break;
        }else{
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  containsIterative(value){
    let currentNode = this;
    while(currentNode){
      if(currentNode.value === value) return true;
      if(currentNode.value < value){
        currentNode = currentNode.right;
      }else{
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  remove(value, parentNode = null){
    let currentNode = this;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      }else{ //when the value matches
        //1. node that has 2 children nodes
        if(currentNode.left && currentNode.right){ //same logic for root node with 2 children and any other node with 2 children too. You get their right subtrees min value and call remove on the currentNode's right subtree, and set the current node as the parent so it can look for the duplicate node that will be removed once the currentNode's value will be set to the right subtrees minimum (left-most) node
          currentNode.value = currentNode.right.getMinValue()
          currentNode.right.remove(currentNode.value, currentNode);
        }
        else if(parentNode === null){ //if it has 1 or 0 children and it has no parent node -> basically a root node with 1 or 0 children
          if(currentNode.left){
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          }else if (currentNode.right){
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          }else{
            currentNode = null;
            return this;
          }
        }
        //if its leaf node with only one child or no child, but its not a root node b/c it has a parent. Then figure out which side of the parent its in so that you can adjust the parent nodes appropriate side
        else if(parentNode.left === currentNode){ 
          parentNode.left = currentNode.left? currentNode.left: currentNode.right;
        }
        else if(parentNode.right === currentNode){
          parentNode.right = currentNode.left? currentNode.left: currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  insertRecursive(value) {
    if(value >= this.value){
      if(!this.right){
        this.right = new BST(value);
      }else{
        this.right.insert(value);
      }
    }else{
      if(!this.left){
        this.left = new BST(value);
      }else{
        this.left.insert(value);
      }
    }
   
    return this;
  }

  containsRecursive(value) {
    if(value === this.value) return true;
    if(value >= this.value) {
      if(this.right) return this.right.contains(value);
      return false;
    }
    if(value < this.value){
      if(this.left) return this.left.contains(value);
      return false;
    }
  }

  removeFirstTry(value, parent = null) {
    // console.log(this, value)
    if(!this.left && !this.right && !parent) return this;
    if(!this.left && !this.right && parent && this.value === value){
      parent.left === this? parent.left = null : parent.right = null;
      return this;
    }

    if(this.left && this.left.value === value){
      if(this.left.left === null && this.left.right === null){
        this.left = null;
      }else if (this.left.left === null || this.left.right === null){
        this.left = this.left.left? this.left.left : this.left.right;
      }else{
        let minVal = this.left.right.findMin().value;
        this.left.value = minVal;
        this.left.remove(minVal, this.left)
      }
      return this;
    }
    if(this.right && this.right.value === value){
      if(this.right.left === null && this.right.right === null){
        this.right = null;
      }else if (this.right.left === null || this.right.right === null){
        this.right = this.right.left? this.right.left : this.right.right;
      }else{
        let minVal = this.right.right.findMin().value;
        this.right.value = minVal;
        this.right.remove(minVal, this.right)
      }
      return this;
    }
    if(value < this.value){
      if(this.left){
        this.left.remove(value, this)
      }
    }
    if(value > this.value){
      if(this.right){
        this.right.remove(value, this)
      }
    }
    if(value === this.value && !parent){ //root node
      const minVal = this.right.findMin().value;
      this.value = minVal;
      this.remove(minVal, this);
    }
    return this;
  }

  findMin(){
    let minNode = this;
    
    while(minNode.left){
      minNode = minNode.left;
    }
    return minNode;
  }

  getMinValue(){
    let minNode = this;
    
    while(minNode.left){
      minNode = minNode.left;
    }
    return minNode.value;
  }
}

const bst1 = new BST(10);
bst1.insertIterative(5).insertIterative(15)
bst1.remove(5).remove(15).remove(10)
console.log(bst1);