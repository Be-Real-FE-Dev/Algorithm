// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSwapPairs = function (head) {
  if (!head) return head;
  const newList = new ListNode(null);

  let prev = newList;
  let cur = head;

  while (cur && cur.next) {
    const next = new ListNode(cur.next.val);
    next.next = new ListNode(cur.val);
    prev.next = next;
    prev = prev.next.next;
    cur = cur.next?.next;
  }

  if (cur) prev.next = cur;
  return newList.next;
};

/**
 * * Park **********************************************************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  let newList = new ListNode();

  newList = head;

  while (head && head.next) {
    const tmp = head.val;
    head.val = head.next.val;
    head = head.next;
    head.val = tmp;
    head = head.next;
  }

  return newList;
}
//* 최원오 -----------------------------------------------------------------------------

const choiSwapPairs = function (head) {
  const prev = new ListNode(null, head);
  let cur = prev;

  while (cur.next && cur.next.next) {
    const odd = cur.next;
    const even = cur.next.next;

    odd.next = even.next;
    even.next = odd;
    cur.next = even;

    cur = cur.next.next;
  }

  return prev.next;
};
