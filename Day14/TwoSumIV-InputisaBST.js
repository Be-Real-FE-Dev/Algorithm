
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


//* 최원오 -----------------------------------------------------------------------------

const choiFindTarget = function (root, k) {
  const arr = [];
  if (!root) return arr;

  const bfs = node => {
    if (!node) return arr;

    arr.push(node.val);
    bfs(node.left);
    bfs(node.right);

    return arr;
  };

  bfs(root);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) return true;
    }
  }
  return false;

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const parkFindTarget = function (root, k) {
  const map = new Map();

  const traverse = node => {
    if (!node) return false;
    const target = k - node.val;
    if (map.has(target)) return true;
    map.set(node.val, 1);

    return traverse(node.left) || traverse(node.right);
  };

  return traverse(root);

};

