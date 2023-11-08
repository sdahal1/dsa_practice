const Queue = require("./Queue");

class BinarySearchTree {
  // your code here
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    //if the key is less than the trees root (this.key), we will focus on left branch
    else if (key < this.key) {
      // const newNode = new BinarySearchTree(key,value,this)
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
    return this;
  }
  insertIteratively(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    let runner = this;
    while (runner) {
      if (key < runner.key) {
        if (!runner.left) {
          runner.left = new BinarySearchTree(key, value, runner);
          return this;
        } else {
          runner = runner.left;
        }
      } else if (key > runner.key) {
        if (!runner.right) {
          runner.right = new BinarySearchTree(key, value, runner);
          return this;
        } else {
          runner = runner.right;
        }
      }
    }
    return this;
  }

  findIteratively(key) {
    if (this.key === key) return this.value;
    let runner = this;
    while (runner) {
      if (key === runner.key) return true;

      if (key < runner.key) {
        runner = runner.left;
      } else {
        runner = runner.right;
      }
    }
    throw new Error("Key Not Found");
  }
  findRecursively(key) {
    if (key === this.key) return this.value;
    if (key < this.key && this.left) return this.left.findRecursively(key);
    if (key > this.key && this.right) return this.right.findRecursively(key);
    throw new Error("Key Not Found");
  }
  remove(key) {
    if (key === this.key) {
      //node with no children
      if (!this.left && !this.right) {
        //if its the root node with no children
        if (!this.parent) {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        } else {
          //if its the leaf node thats not a root node
          if (this.key < this.parent.key) {
            this.parent.left = null;
          } else {
            this.parent.right = null;
          }
        }
      }
      //if its a node that has only has one child and its a left child
      else if (this.left && !this.right) {
        //if this is the root node with only a left child
        if (!this.parent) {
          const temp = this.left;
          this.key = temp.key;
          this.left = temp.left;
          this.right = temp.right;
          return;
        }
        //find out if this node is the parents left or right child
        else if (this === this.parent.left) {
          this.parent.left = this.left;
        } else {
          this.parent.right = this.left;
        }
      }
      //if its a node that has only has one child and its a right child
      else if (this.right && !this.left) {
        //if this is the root node with only a right child
        if (!this.parent) {
          const temp = this.right;
          this.key = temp.key;
          this.left = temp.left;
          this.right = temp.right;
        }
        //if this node is the parents left or right child
        else if (this === this.parent.left) {
          this.parent.left = this.right;
          this.right.parent = this.parent;
        }
        //if this node is the parents right child
        else {
          // console.log("made it here", this.key, this.parent)
          this.parent.right = this.right;
          this.right.parent = this.parent;
        }
      }
      //if its a node that has two children
      else {
        //find the minimum node on the this nodes right branch
        let runner = this.right;
        while (runner.left) {
          runner = runner.left;
        }
        this.key = runner.key;
        this.value = runner.value;
        if (runner === runner.parent.right) {
          runner.parent.right = runner.right;
        } else {
          runner.parent.left = runner.right;
        }
        runner.parent = null;
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      console.log("nothing to remove");
    }
  }

  removeV2(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.removeV2(successor.key);
      } else if (this.left) {
        /* If the node only has a left child,
         then you replace the node with its left child. */
        this._replaceWith(this.left);
      } else if (this.right) {
        /* And similarly, if the node only has a right child,
         then you replace it with its right child. */
        this._replaceWith(this.right);
      } else {
        /* If the node has no children, then
         simply remove it and any references to it
         by calling `this._replaceWith(null)`. */
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.removeV2(key);
    } else if (key > this.key && this.right) {
      this.right.removeV2(key);
    } else {
      throw new Error("Key Not Found");
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  dfsInOrder(values=[]){
    if(this.left){
      this.left.dfsInOrder(values);
    }
    values.push(this.key);
    if(this.right){
      this.right.dfsInOrder(values);
    }
    return values
  }

  dfsPreOrder(values=[]){
    values.push(this.key);
    if(this.left){
      this.left.dfsPreOrder(values);
    }
    if(this.right){
      this.right.dfsPreOrder(values);
    }
    return values
  }

  dfsPostOrder(values=[]){
    if(this.left){
      this.left.dfsPostOrder(values);
    }
    if(this.right){
      this.right.dfsPostOrder(values);
    }
    values.push(this.key);
    return values
  }

  bfs(tree, values = []){
    const queue = new Queue();
    queue.enqueue(tree);
    let node = queue.dequeue();
    while(node){
      values.push(node.value);
      if(node.left){
        queue.enqueue(node.left);
      }
      if(node.right){
        queue.enqueue(node.right);
      }
      node = queue.dequeue();
    }
  }
  getHeight(currentHeight = 0){
    if(!this.left && !this.right) return currentHeight;
    if(this.left && !this.right) return this.left.getHeight(currentHeight+1);
    if(!this.left && this.right) return this.right.getHeight(currentHeight+1);
    if(this.left && this.right){
      return Math.max(this.left.getHeight(currentHeight+1), this.right.getHeight(currentHeight+1))
    }
  }

  isBST(){
    const nums = this.dfsInOrder();
    for(let i=0;i<nums.length-1;i++){
      if(nums[i] > nums[i+1]) return false;
    }
    return true;
  }
  isBSTNiave(arr = [], flag = true){
    let prev = null;
    let isValid = true;

    function inOrderTraversal(node) {
      if (node === null || !isValid) return;

      // Visit left subtree
      if(node.left) inOrderTraversal(node.left);

      // Check the current node
      if (prev !== null && node.key <= prev.key) {
        isValid = false;
        return;
      }
      prev = node;

      // Visit right subtree
      if(node.right) inOrderTraversal(node.right);
    }

    inOrderTraversal(this);
    return isValid;
  }

  getHeight2(currentHeight = 0){
    // console.log(currentHeight)
    if(!this) return currentHeight;
    currentHeight++;

    if(this.left && !this.right){
      return this.left.getHeight2(currentHeight)
    }
    if(this.right && !this.left){
      return this.right.getHeight2(currentHeight)
    }
    if(this.left && this.right){
      currentHeight = Math.max(this.left.getHeight2(currentHeight), this.right.getHeight2(currentHeight))
    }
    return currentHeight
  }
  
}
const bst = new BinarySearchTree(7);
bst.insert(4).insert(12).insert(3).insert(6).insert(14).insert(10).insert(8)
// bst.left.key = -20
// bst.right = new BinarySearchTree(10)

// console.log(bst.isBSTNiave())
console.log(bst.getHeight2())
// console.log(bst.dfsInOrder())
// bst.left.right.key = 20
// console.log(bst.right.right.key)
// console.log(bst.getHeight())
// console.log(bst.dfsInOrder())
// console.log(bst.isBSTNiave())
