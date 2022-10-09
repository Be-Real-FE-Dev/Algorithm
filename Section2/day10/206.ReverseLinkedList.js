// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangReverseList = function (head) {
  let cur = null;
  while (head) {
    cur = new ListNode(head.val, cur);
    head = head.next;
  }

  return cur;
};

/**
 * * Park ************************************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkReverseList = function (head) {
  let prev = null;
  let cur = head;

  while (cur) [cur.next, prev, cur] = [prev, cur, cur.next];

  return prev;
};
