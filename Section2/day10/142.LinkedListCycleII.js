// * doeun 1--------------------------------------------------------------------------------------------------------------------//
const hwangDetectCycle1 = function (head) {
  const nodes = [];

  while (head) {
    if (nodes.indexOf(head) !== -1) return head;
    nodes.push(head);
    head = head.next;
  }

  return head;
};

// * doeun 2--------------------------------------------------------------------------------------------------------------------//
const hwangDetectCycle2 = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;

    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
