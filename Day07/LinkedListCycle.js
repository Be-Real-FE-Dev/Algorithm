// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangHasCycle = function (head) {
  if (!head || !head.next) return false;

  let fast = head.next;
  let slow = head;

  while (fast && slow) {
    fast = fast.next?.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};

/**
 * * ************************* Park's Code *************************
 * @param {ListNode} head
 * @return {boolean}
 */
const parkHasCycle = function (head) {
  let turtle = head;
  let rabbit = head?.next;

  while (turtle && rabbit) {
    if (turtle === rabbit) return true;

    turtle = turtle.next;
    rabbit = rabbit.next?.next;
  }
  return false;
};
