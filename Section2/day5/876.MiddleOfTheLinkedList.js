//* 최원오 -----------------------------------------------------------------------------

const choiMiddleNode = function (head) {
  const valArr = [];
  let cur = head;

  while (true) {
    valArr.push(cur.val);

    if (!cur.next) break;

    cur = cur.next;
  }

  const idx = Math.floor(valArr.length / 2);
  let count = 0;

  while (true) {
    if (count === idx) return head;

    head = head.next;
    count += 1;
  }
};
