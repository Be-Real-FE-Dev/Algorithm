/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  if (!root) return root;

  const result = [];

  const traverse = node => {
    if (!node) {
      result.push('null');
      return;
    }
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  if (!data) return data;
  const tree = data.split(',');
  let index = 0;

  function traverse() {
    if (tree[index] === 'null') {
      index++;
      return null;
    }
    const node = new TreeNode(Number(tree[index]));
    index++;
    node.left = traverse();
    node.right = traverse();
    return node;
  }

  return traverse();
};
