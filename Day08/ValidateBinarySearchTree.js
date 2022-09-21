// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsValidBST = function(root) {
  return hwangBst(root, null, null);
};

function hwangBst(node, min, max){
   if(node === null) return true;
   const val = node.val;
   if((min !== null && val <= min) || (max !== null && val >= max)) return false; // min, max 값이 0일때가 있으면 oo !== null 조건 명시적 기입.
   
   return hwangBst(node.right, val, max) && hwangBst(node.left, min, val);

}
// * doeun end--------------------------------------------------------------------------------------------------------------------//