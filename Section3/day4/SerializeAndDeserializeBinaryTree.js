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
