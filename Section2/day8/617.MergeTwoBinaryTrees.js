//* 최원오 -----------------------------------------------------------------------------

const choiMergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  root1.val += root2.val;

  root1.left = choiMergeTrees(root1.left, root2.left);
  root1.right = choiMergeTrees(root1.right, root2.right);

  return root1;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
};

/**
 * * Park ******************************************************
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;

  const mergeTree = new TreeNode((root1?.val || 0) + (root2?.val || 0));

  mergeTree.left = mergeTrees(root1?.left, root2?.left);
  mergeTree.right = mergeTrees(root1?.right, root2?.right);

  return mergeTree;
};
