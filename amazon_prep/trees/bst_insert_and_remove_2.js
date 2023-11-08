class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
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

  contains(value) {
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

  remove(value, parent = null) {
    if (value < this.value) {
        if (this.left) {
            this.left.remove(value, this);
        }
    } else if (value > this.value) {
        if (this.right) {
            this.right.remove(value, this);
        }
    } else {
     
        if (!this.left || !this.right) {
            const newChild = this.left ? this.left : this.right;
            if (parent) {
                if (parent.left === this) {
                    parent.left = newChild;
                } else {
                    parent.right = newChild;
                }
            } else {
                if(newChild){
                  this.value = newChild.value;
                  this.left = newChild.left;
                  this.right = newChild.right;
                }else{
                  return this;
                }
            }
        }
        // Node with two children
        else {
            const minVal = this.right.findMin();
            this.value = minVal;
            this.right.remove(minVal, this);
        }
    }
    return this;
}
  findMin(){
    let minNode = this;
    
    while(minNode.left){
      minNode = minNode.left;
    }
    return minNode.value;
  }
}

// Do not edit the line below.
exports.BST = BST;
