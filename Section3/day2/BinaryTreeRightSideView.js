// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangRightSideView = function (root) {
  if (!root) return [];
  const result = [];
  const q = [root];

  while (q.length) {
    const len = q.length;
    const level = [];

    for (let i = 0; i < len; i++) {
      const node = q.shift();
      level.push(node.val);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    result.push(level);
  }

  return result.map(res => res[res.length - 1]);
};
