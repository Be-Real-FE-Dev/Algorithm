// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMergeTwoLists = function (list1, list2) {
  const mergeList = { val: 0, next: null };
  let head = mergeList;

  while (list1 && list2) {
    const l1 = list1.val;
    const l2 = list2.val;

    if (l1 < l2) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }

    head = head.next;
  }

  head.next = list1 || list2;

  return mergeList.next;
};
