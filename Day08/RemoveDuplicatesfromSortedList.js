/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkDeleteDuplicates = function (head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
