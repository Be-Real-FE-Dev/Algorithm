/**
 * * ************************* Park's Code *************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkReverseList = function (head) {
  if (!head) return head;

  let cur = new ListNode(head.val);
  head = head.next;

  while (head) {
    cur = new ListNode(head.val, cur);
    head = head.next;
  }
  return cur;
  
//* 최원오 -----------------------------------------------------------------------------
const choiReverseList = function (head) {
  let prevNode = null;

  while (head) {
    const nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
};
