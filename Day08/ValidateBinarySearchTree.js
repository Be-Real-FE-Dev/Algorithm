//* 최원오 -----------------------------------------------------------------------------
const choiDfs = (node, min, max) => {
  if (node.val <= min || node.val > max) {
    return false;
  }

  if (node.left && !choiDfs(node.left, min, node.val)) return false;

  if (node.right && !choiDfs(node.right, node.val, max)) return false;

  return true;
};

const choiIsValidBST = function (root) {
  if (!root) return true;

  return choiDfs(root, -Infinity, Infinity);
};
