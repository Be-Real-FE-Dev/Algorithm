/**
 * @param {TreeNode} root
 * @return {number}
 */
const parkMaxDepth = function (root) {
  if (!root) return 0;

  const leftMaxDepth = 1 + maxDepth(root.left);
  const rightMaxDepth = 1 + maxDepth(root.right);

  return Math.max(leftMaxDepth, rightMaxDepth);
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMinCostClimbingStairs = function(cost) {
  const dp = [cost[0], cost[1]];
  
  for(let i = 2; i < cost.length; i++){
      dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
  }
  
  return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};

