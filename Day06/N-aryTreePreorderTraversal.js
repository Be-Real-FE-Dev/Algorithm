// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangPreorder = function(root) {
  let arr = [];
  hwangPreOrderValue(root, arr);
  
  return arr
};

function hwangPreOrderValue(node, arr){
  if(node === null) return;
  
  arr.push(node.val);
  for(let i = 0; i < node.children.length; i++){
      preOrder(node.children[i], arr);
  }
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
