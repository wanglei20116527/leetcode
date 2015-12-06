/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var data = [];
    
    solution( root, data );
    
    return data;
    
};

var solution = function( root, data ){
    if( root == null ){
        return;
    }
    
    solution( root.left, data  );
    data.push( root.val );
    solution( root.right, data );
}
