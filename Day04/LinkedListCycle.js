/**
 * * ************************* Park's Code *************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkDetectCycle = head => {
  if (!head) return null;
  const map = new Map();

  while (head.next) {
    if (map.has(head)) {
      return head;
    }
    map.set(head);
    head = head.next;
  }
  return null;
};
