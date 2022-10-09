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

/**
 * * Park ************************************************
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const parkMergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    list1.next = parkMergeTwoLists(list1.next, list2);
    return list1;
  }
  list2.next = parkMergeTwoLists(list1, list2.next);
  return list2;
};

//* 최원오 -----------------------------------------------------------------------------

const choiMergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = choiMergeTwoLists(list1.next, list2);
    return list1;
  }
  list2.next = choiMergeTwoLists(list1, list2.next);
  return list2;
};
