* doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;
  if (val < root.val) return hwangSearchBST(root.left, val);
  if (val > root.val) return hwangSearchBST(root.right, val);
}

//* 최원오 -----------------------------------------------------------------------------

const choiSearchBST = function (root, val) {
  while (root.val !== val) {
    if (root.val > val) {
      root = root.left;
    } else {
      root = root.right;
    }

    if (!root) return root;
  }

  return root;

/**
 * * Park *****************************************************************
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const parkSearchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  if (val < root.val) return parkSearchBST(root.left, val);
  return parkSearchBST(root.right, val);

};
