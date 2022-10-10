// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangGetIntersectionNode = function (headA, headB) {
  let listA = headA;
  let listB = headB;

  while (listA !== listB) {
    listA = listA ? listA.next : headB;
    listB = listB ? listB.next : headA;
  }

  return listA;
};
