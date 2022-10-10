/**
 * * Park ********************************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkDeleteDuplicates = function (head) {
  const map = new Map();
  const result = new ListNode();

  let newCurr = result;
  let curr = head;

  while (curr) {
    map.has(curr.val) ? map.set(curr.val, false) : map.set(curr.val, true);
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    if (map.get(curr.val)) {
      newCurr.next = new ListNode(curr.val);
      newCurr = newCurr.next;
    }
    curr = curr.next;
  }

  return result.next;
};
