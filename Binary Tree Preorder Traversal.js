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
var preorderTraversal = function(root) {
    var data = [];
    
    solution( root, data );
    
    return data;
};

var solution = function( root, data ){
    if( root == null ){
        return;
    }
    
    data.push( root.val );
    solution( root.left, data );
    solution( root.right, data );
}


