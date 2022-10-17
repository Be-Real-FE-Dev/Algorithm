/**
 * * Park ******************************************************
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const parkSerialize = function (root) {
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
 * * Park ******************************************************
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const parkDeserialize = function (data) {
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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSerialize = function (root) {
  const arr = [];

  const getTreeVal = (root, arr) => {
    if (!root) {
      arr.push('#');
      return;
    }

    arr.push(root.val);
    getTreeVal(root.left, arr);
    getTreeVal(root.right, arr);
  };

  getTreeVal(root, arr);

  return arr.join(',');
};

const hwangDeserialize = function (data) {
  const newData = data.split(',');
  let index = 0;

  const createRoot = data => {
    if (index > data.length || data[index] === '#') return null;

    const root = new TreeNode(+data[index]);
    index += 1;
    root.left = createRoot(data);
    index += 1;
    root.right = createRoot(data);

    return root;
  };

  return createRoot(newData);
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
