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
};
