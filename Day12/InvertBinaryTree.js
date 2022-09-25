// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangInvertTree = function (root) {
  if (!root) return root;

  const q = [root];

  while (q.length) {
    const node = q.shift();

    const { left } = node;
    node.left = node.right;
    node.right = left;
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }

  return root;
};
