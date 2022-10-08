// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangAddTwoNumbers = function (l1, l2) {
  let carry = 0;

  const newList = { val: 0, next: null };
  let head = newList;

  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;

    head.next = new ListNode(sum);
    head = head.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) head.next = new ListNode(carry);

  return newList.next;
};
