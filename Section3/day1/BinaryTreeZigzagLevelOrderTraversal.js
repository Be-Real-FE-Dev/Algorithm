// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangZigzagLevelOrder = function (root) {
  if (!root) return [];

  const result = [];

  const q = [];
  let direction = 1;
  q.push(root);

  while (q.length) {
    const len = q.length;
    const arr = [];

    for (let i = 0; i < len; i++) {
      const node = q.shift();
      if (!node) continue;

      direction === 1 ? arr.push(node.val) : arr.unshift(node.val);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    direction *= -1;
    result.push(arr);
  }

  return result;
};
