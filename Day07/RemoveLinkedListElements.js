// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangRemoveElements = function(head, val) {
  if(!head) return head;
  
  let newList = new ListNode();
  let current = newList;
  
  while(head){      
      if(head.val !== val){
        current.next = new ListNode(head.val);
        current = current.next;
      }
      head = head.next;
  }
  
  return newList.next
};