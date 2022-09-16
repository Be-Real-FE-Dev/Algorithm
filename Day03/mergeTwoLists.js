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