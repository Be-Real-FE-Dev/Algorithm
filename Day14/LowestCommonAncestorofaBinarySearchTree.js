//* 최원오 -----------------------------------------------------------------------------

const choiLowestCommonAncestor = function (root, p, q) {
  if (root.val > p.val && root.val > q.val) return choiLowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val) return choiLowestCommonAncestor(root.right, p, q);

  return root;
};
