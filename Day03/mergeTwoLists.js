
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMergeTwoLists = function(list1, list2) {
  if(!list1) return list2;
  if(!list2) return list1;

  let thisList = list1;
  let newList = list2;
  
  while(newList){
      let node = new ListNode(newList.val);
      let current = thisList;
      let prev = null
      while(current && current.val <= node.val){
          prev = current
          current = current.next;
      }

      node.next = current
      prev ? prev.next = node : thisList = node;
      newList = newList.next
  }
  
  return thisList
};


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
