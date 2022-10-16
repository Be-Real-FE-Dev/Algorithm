// * doeun 1--------------------------------------------------------------------------------------------------------------------//
const hwangkthSmallest1 = function (root, k) {
  const arr = [];

  const dfs = root => {
    if (!root) return;
    if (root.left) dfs(root.left);
    arr.push(root.val);
    if (root.right) dfs(root.right);
  };
  dfs(root);
  return arr[k - 1];
};
// * doeun 2--------------------------------------------------------------------------------------------------------------------//
const hwangkthSmallest2 = function (root, k) {
  let cur = root;
  const arr = [];

  while (cur || arr) {
    while (cur) {
      arr.push(cur);
      cur = cur.left;
    }

    cur = arr.pop();
    k -= 1;

    if (k === 0) return cur.val;
    cur = cur.right;
  }
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
