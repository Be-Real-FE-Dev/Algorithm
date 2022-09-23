// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangPreorderTraversal = function(root) {
  let num = []
  
  traversal(root, num);
  return num
};

function traversal(node, arr){
  if(node === null) return;
  
  arr.push(node.val);
  traversal(node.left, arr);
  traversal(node.right, arr);
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
