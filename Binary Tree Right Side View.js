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
var rightSideView = function(root) {
    if( root == null ){
        return [];
    }
    
    var result = [root.val];
    
    solution( root, result, 1 );
    
    return result;
};

var solution = function(root, arr, layer){
    if( root.right ){
        if( arr[layer] == undefined ){
            arr[layer] = root.right.val;
        }
        solution( root.right, arr, layer + 1 );
    }
    
    if( root.left ){
        if( arr[layer] == undefined ){
            arr[layer] = root.left.val;
        }
        
        solution( root.left, arr, layer + 1 );
    }
};
