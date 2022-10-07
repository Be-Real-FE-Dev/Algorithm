//* 최원오 -----------------------------------------------------------------------------

const choiMergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  root1.val += root2.val;

  root1.left = choiMergeTrees(root1.left, root2.left);
  root1.right = choiMergeTrees(root1.right, root2.right);

  return root1;
};
