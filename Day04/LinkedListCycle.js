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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangDetectCycle = function (head) {
  const arr = [];
  let current = head;

  while (current) {
    const idx = arr.indexOf(current);

    if (idx !== -1) {
      return current;
    } else {
      arr.push(current);
    }

    current = current.next;
  }

  return current;
};
