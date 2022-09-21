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
