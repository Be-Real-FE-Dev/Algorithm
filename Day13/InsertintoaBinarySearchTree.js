
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangInsertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val);
  } else if (val < root.val) {
    root.left = hwangInsertIntoBST(root.left, val);
  } else if (val > root.val) {
    root.right = hwangInsertIntoBST(root.right, val);
    }
    
    return root
}

//* 최원오 -----------------------------------------------------------------------------

const choiInsertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val > val) {
    root.left = choiInsertIntoBST(root.left, val);
  } else {
    root.right = choiInsertIntoBST(root.right, val);
  }


/**
 * * Park *************************************************
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const parkInsertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (root.val > val) {
    root.left = parkInsertIntoBST(root.left, val);
  } else if (root.val < val) {
    root.right = parkInsertIntoBST(root.right, val);
  }

  return root;
};
