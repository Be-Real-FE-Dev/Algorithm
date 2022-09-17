/**
 * * ************************* Park's Code *************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkMiddleNode = head => {
  const array = convertListToArray(head);
  return convertArrayToList(array.slice(array.length / 2));
};

const convertListToArray = head => {
  const array = [];
  let cur = head;
  while (cur) {
    array.push(cur.val);
    cur = cur.next;
  }
  return array;
};

const convertArrayToList = array => {
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
