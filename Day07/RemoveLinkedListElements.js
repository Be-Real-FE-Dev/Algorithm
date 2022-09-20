// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangRemoveElements = function (head, val) {
  if (!head) return head;

  const newList = new ListNode();
  let current = newList;

  while (head) {
    if (head.val !== val) {
      current.next = new ListNode(head.val);
      current = current.next;
    }
    head = head.next;
  }

  return newList.next;
};

/**
 * * ************************* Park's Code *************************
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const parkRemoveElements = function (head, val) {
  const result = new ListNode();
  result.next = head;

  let resultCur = result;
  let headCur = head;
  while (headCur) {
    if (headCur.val === val) {
      resultCur.next = headCur.next;
      headCur = headCur.next;
    } else {
      headCur = headCur.next;
      resultCur = resultCur.next;
    }
  }
  return result.next;
};
