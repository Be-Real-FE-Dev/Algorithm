// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangConnect = function (root) {
  const q = [];
  q.push(root);

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const el = q.shift();
      if (!el) continue;
      if (el.left) q.push(el.left);
      if (el.right) q.push(el.right);
      el.next = i === len - 1 ? null : q[0];
    }
  }

  return root;
};

/**
 * * Park ******************************************************
 * @param {Node} root
 * @return {Node}
 */
const parkConnect = function (root) {
  const tree = root;

  while (root && root.left) {
    let cur = root;

    while (cur) {
      cur.left.next = cur.right;
      cur.right.next = cur.next ? cur.next.left : null;
      cur = cur.next;
    }
    root = root.left;
  }

  return tree;
};
