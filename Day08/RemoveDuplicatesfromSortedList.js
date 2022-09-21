/**
 * *  ************************* Park's Code *************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkDeleteDuplicates = function (head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;

//* 최원오 -----------------------------------------------------------------------------

const choiDeleteDuplicates = function (head) {
  const valArr = [];

  let prevNode = null;
  const curNode = head;

  while (head) {
    if (valArr.includes(head.val)) {
      head = prevNode;
      head.next = head.next.next;
    } else {
      valArr.push(head.val);
      prevNode = head;
    }

    head = head.next;
  }

  return curNode;
};
