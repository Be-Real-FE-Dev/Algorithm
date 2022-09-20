// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangHasCycle = function(head) {
  if(!head || !head.next) return false;
  
  let fast = head.next;
  let slow = head;
  
  while(fast && slow){
      fast = fast.next?.next;
      slow = slow.next;
      
      if(fast === slow) return true;
  }
  
  return false
};