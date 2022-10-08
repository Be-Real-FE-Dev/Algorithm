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
