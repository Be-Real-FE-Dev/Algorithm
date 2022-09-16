/**
 * * ************************* Park's Code *************************
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const parkMergeTwoLists = (list1, list2) =>
  convertArrayToListNode([...convertListToArray(list1), ...convertListToArray(list2)].sort((a, b) => a - b));

const convertListToArray = list => {
  const array = [];
  let cur = list;

  while (cur) {
    array.push(cur.val);
    cur = cur.next;
  }
  return array;
};

const convertArrayToListNode = array => {
  let head = null;
  let cur = null;

  array.forEach(el => {
    if (!head) {
      head = new ListNode(el);
      cur = head;
    } else {
      cur.next = new ListNode(el);
      cur = cur.next;
    }
  });

  return head;
};
