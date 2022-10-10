/**
 * * Park **********************************
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const parkGetIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
};
