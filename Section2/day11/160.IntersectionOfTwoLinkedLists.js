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
