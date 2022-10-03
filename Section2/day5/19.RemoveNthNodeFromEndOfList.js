/**
 * * Park **************************************************
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const parkRemoveNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};
