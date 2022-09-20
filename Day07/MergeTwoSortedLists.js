// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMergeTwoLists = function(list1, list2) {
  if(!list1) return list2;
  if(!list2) return list1;
  
  let mergeList = new ListNode();
  let current = mergeList;
  
  while(list1 && list2){
      if(list1.val < list2.val){
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }
  
  current.next = list1 || list2;
  
  return mergeList.next;
};