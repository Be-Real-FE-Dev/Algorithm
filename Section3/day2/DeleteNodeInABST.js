// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangDeleteNode = function (root, key) {
  if (!root) return null;
  if (root.val === key) {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let min = root.right;
    while (min.left) {
      min = min.left;
    }

    root.right = deleteNode(root.right, min.val);
    min.left = root.left;
    min.right = root.right;
    root = min;
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    root.left = deleteNode(root.left, key);
  }

  return root;
};
