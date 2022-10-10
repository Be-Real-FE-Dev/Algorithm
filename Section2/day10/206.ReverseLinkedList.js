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

//* 최원오 -----------------------------------------------------------------------------

const choiReverseList = function (head) {
  let prevNode = null;

  while (head) {
    const nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
};
