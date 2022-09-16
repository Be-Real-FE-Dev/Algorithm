
//* 세훈  ------------------------------
// 문제 이해 안됨 코드 리턴값이 정답과 같아도 undefinde 출력됨

// const jeongMergeTwoLists = function(list1, list2) {
//   if (list1.length === 0) return list2;
//   if (list2.length === 0) return list1;
//   let maxIdx = Math.max(0, list1.length, list2.length); 

//   for (let i = 0; i < maxIdx; i++) {
//     if(list1[i] <= list2[i]) {
//       list1[i+1] = jeongMergeTwoLists(list1.splice(i+1), list2)
//     return list1;
//     } if(list2[i] <= list1[i]) {
//       list2[i+1] = jeongMergeTwoLists(list1,list2.splice(i+1))
//     return list2;
//     }
//   }
  
// };

// 인터넷 코드 정답으로 나오는데 형식이 이해가 안됨 

const jeongMergeTwoLists = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  
  if (list1.val <= list2.val) {
      list1.next = jeongMergeTwoLists(list1.next, list2);
      return list1;
  } else {
      list2.next = jeongMergeTwoLists(list1, list2.next);
      return list2;
  }
};
    
// console.log(jeongMergeTwoLists( [1,2,4],  [1,3,4]))    
//* -------------------------------