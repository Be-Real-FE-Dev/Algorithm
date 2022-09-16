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