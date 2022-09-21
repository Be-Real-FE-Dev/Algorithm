// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLowestCommonAncestor = function(root, p, q) {
  return hwangDfs(root, p, q);
};

function hwangDfs(node, p, q){
  if(node.val < p.val && node.val < q.val) return hwangDfs(node.right, p, q)
  else if(node.val > p.val && node.val > q.val) return hwangDfs(node.left, p, q)
  else return node
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
