// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangInorderTraversal = function(root) {
  const inorder = (r = root, arr) => {
      if(!r) return [];
      
      inorder(r.left, arr);
      arr.push(r.val);
      inorder(r.right,arr);
      return arr;
  }
  
  return inorder(root, [])
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
