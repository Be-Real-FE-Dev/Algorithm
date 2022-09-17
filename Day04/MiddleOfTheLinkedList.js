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
//* 최원오 -----------------------------------------------------------------------------

const choiMiddleNode = function(head) {
  const valArr = [];
  let cur = head;
  
  while (true){
    valArr.push(cur.val);
      
    if (!cur.next) break;
      
    cur = cur.next;  
  }
  
  const idx = valArr.length % 2 === 0 ? valArr.length/2 : Math.floor(valArr.length/2);
  let count = 0;

  while (true){
    if (count === idx) return head;
      
    head = head.next;
    count += 1;
  }
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMiddleNode = function(head) {
  let length = 0;
  let list = head;
  
  while(list){
      length += 1;
      list = list.next
  }
  
  list = head;
  let half =Math.floor(length / 2)
  
  while(half--){
      list = list.next
  }
  
  return list
};