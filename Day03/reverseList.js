
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangReverseList = function(head) {
  if(head === null) return head;
  
  let next = null;
  let current = head;
  let prev = head.next;
  
  while(current.next !== null){
      current.next = next;
      next = current;
      current = prev;
      prev = prev.next;
  }
  
  current.next = next;

  return current
};


/**
 * * ************************* Park's Code *************************
 * @param {ListNode} head
 * @return {ListNode}
 */
const parkReverseList = head => convertArrayToList(convertListToArray(head).reverse());

const convertListToArray = list => {
  const array = [];
  let cur = list;
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
