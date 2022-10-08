// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangReverseList = function (head) {
  let cur = null;
  while (head) {
    cur = new ListNode(head.val, cur);
    head = head.next;
  }

  return cur;
};
