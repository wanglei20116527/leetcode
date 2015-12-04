/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if( root == null ){
        return null;
    }
    
    var target = iterator( root, k, {count: 0} );
    
    if( target ){
        return target.val;
    }
    
    return null;
};


var iterator = function( root, k, infor ){
    var target = null;
    
    if( root.left ){
        target = iterator( root.left, k, infor );
    }
    
    if( target ){
        return target;
    }
    
    infor.count++;
    if( infor.count == k ){
        return root;
    }
    
    if( root.right ){
        target = iterator( root.right, k, infor );
    }
    
    return target;
};




