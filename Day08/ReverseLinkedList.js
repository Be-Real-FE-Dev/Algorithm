// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangReverse = function (head){
  if(!head) return head;
    
    let current = new ListNode(head.val);
    let next = head.next;
    
    while(next){
        current = new ListNode(next.val, current);
        next = next.next;
    }
    
    return current
}