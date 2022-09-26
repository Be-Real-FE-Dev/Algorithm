/**
 * * Park ********************************************************************************
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const parkInvertTree = function (root) {
  if (!root) return root;

  const tempTree = root.left;
  root.left = parkInvertTree(root.right);
  root.right = parkInvertTree(tempTree);

  return root;
};

//* 최원오 -----------------------------------------------------------------------------

const choiInvertTree = function (root) {
  if (!root) return root;

  const left = choiInvertTree(root.left);
  const right = choiInvertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};
