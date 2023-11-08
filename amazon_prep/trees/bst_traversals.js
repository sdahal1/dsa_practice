const {BST} = require("./bst_insert_and_remove_2")

const bst1 = new BST(10)
bst1.insert(5).insert(15).insert(2).insert(6).insert(1).insert(13).insert(22).insert(12).insert(14);

const inOrderTraversal = (root, result = [])=>{
  if(root.left){
    inOrderTraversal(root.left, result);
  }
  result.push(root.value);
  if(root.right){
    inOrderTraversal(root.right, result);
  }
  return result;
}

const preOrderTraversal = (root, result = [])=>{
  if(!root) return result;
  result.push(root.value);
  preOrderTraversal(root.left, result);
  preOrderTraversal(root.right, result)
  return result;
}

const postOrderTraversal = (root, result = [])=>{
  if(!root) return result;
  postOrderTraversal(root.left, result);
  postOrderTraversal(root.right, result)
  result.push(root.value);
  return result;
}


// console.log(inOrderTraversal(bst1));
// console.log(preOrderTraversal(bst1));
// console.log(postOrderTraversal(bst1));

