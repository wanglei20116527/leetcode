/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    return solution(root, 0, 0);
};

var solution = function(root, curt, sum){
    if( root == null ){
        return sum;
    }
    
    if( root.left == null && root.right == null ){
        return root.val + curt * 10 + sum;
    }
    
    if( root.left ){
        sum = solution(root.left, curt * 10 + root.val, sum);
    }
    
    if( root.right ){
        sum = solution(root.right, curt * 10 + root.val , sum);
    }
    
    return sum;
};
