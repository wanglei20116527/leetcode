/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    var tmp = [];
    solution( root, tmp, 0 );
};

var solution = function( root, tmp, layer ){
    if( root == null || root.left == null ){
        return;
    }
    
    if( tmp[layer] ){
        tmp[layer].next = root.left;
    }
    
    root.left.next = root.right;
    
    tmp[layer] = root.right;
    
    solution( root.left, tmp, layer + 1 );
    solution( root.right, tmp, layer + 1 );
}
