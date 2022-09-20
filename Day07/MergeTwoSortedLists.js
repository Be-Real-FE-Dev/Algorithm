// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  const mergeList = new ListNode();
  let current = mergeList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return mergeList.next;
};

/**
 * * ************************* Park's Code *************************
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const parkMergeTwoLists = function (list1, list2) {
  const result = new ListNode();
  let prev = result;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  if (list1) cur.next = list1;
  if (list2) cur.next = list2;

  return result.next;
};
