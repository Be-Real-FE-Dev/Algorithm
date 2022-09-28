// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangInvertTree = function (root) {
  if (!root) return root;

  const q = [root];

  while (q.length) {
    const node = q.shift();

    const { left } = node;
    node.left = node.right;
    node.right = left;
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }

  return root;
};

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
