// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangDeleteDuplicates = function(head) {
  let current = head?.next;
  let prev = head;
  
  while(current){
      if(prev.val !== current.val){
          prev.next = new ListNode(current.val);
          prev = prev.next;
      }
      
      prev.next = null;
      current = current.next;
  }
  
  return head;
};