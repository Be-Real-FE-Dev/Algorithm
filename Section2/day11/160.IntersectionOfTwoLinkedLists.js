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
}

//* 최원오 -----------------------------------------------------------------------------

const choiGetIntersectionNode = function (headA, headB) {
  let A = headA;
  let B = headB;

  while (B) {
    if (A === B) {
      return A;
    }
    if (!A.next) {
      B = B.next;
      A = headA;
    } else {
      A = A.next;
    }
  }
};
