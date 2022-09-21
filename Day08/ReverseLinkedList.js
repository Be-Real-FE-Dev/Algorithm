/**
 * * ************************* Park's Code *************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkReverseList = function (head) {
  if (!head) return head;

  let cur = new ListNode(head.val);
  head = head.next;

  while (head) {
    cur = new ListNode(head.val, cur);
    head = head.next;
  }
  return cur;
};
