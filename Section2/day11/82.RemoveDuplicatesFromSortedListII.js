
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangDeleteDuplicates = function (head) {
  const newNodes = new ListNode(null, head);
  let left = newNodes;
  let right = head;

  while (right) {
    while (right.next && right.val === right.next.val) {
      right = right.next;
    }

    if (left.next === right) {
      left = left.next;
    } else {
      left.next = right.next;
    }

    right = right.next;
  }

  return newNodes.next;
}
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
