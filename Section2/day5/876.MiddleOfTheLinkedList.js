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

/**
 * * Park *******************************************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkMiddleNode = function (head) {
  let slow = head;
  let fast = head;
  let index = 1;

  while (fast) {
    if (index % 2 === 0) {
      slow = slow.next;
      fast = fast.next;
    } else {
      fast = fast.next;
    }
    index++;
  }
  return slow;
};
