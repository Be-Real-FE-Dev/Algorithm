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
};
