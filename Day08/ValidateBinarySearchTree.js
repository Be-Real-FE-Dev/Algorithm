
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

/**
 * * ************************* Park's Code *************************
 * @param {TreeNode} root
 * @return {boolean}
 */
const parkIsValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

//* 최원오 -----------------------------------------------------------------------------
const choiDfs = (node, min, max) => {
  if (node.val <= min || node.val > max) {
    return false;
  }

  if (node.left && !choiDfs(node.left, min, node.val)) return false;

  if (node.right && !choiDfs(node.right, node.val, max)) return false;

  return true;
};

const choiIsValidBST = function (root) {
  if (!root) return true;

  return choiDfs(root, -Infinity, Infinity);
};

