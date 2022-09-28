// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFindTarget = function (root, k) {
  return hwangBst(root, k, []);
};

function hwangBst(node, k, arr) {
  if (!node) return false;

  if (arr.includes(node.val)) return true;
  arr.push(k - node.val);

  return hwangBst(node.left, k, arr) || hwangBst(node.right, k, arr);
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
