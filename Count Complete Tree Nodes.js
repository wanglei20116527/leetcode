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
var countNodes = function(root) {
    if(root == null){
        return 0;
    }
    
    var tmpNode;
    
    var leftLayer = 1;
    tmpNode = root;
    while(tmpNode.left){
        leftLayer++;
        tmpNode = tmpNode.left;
        
    }
    
    var rightLayer = 1;
    tmpNode = root;
    while(tmpNode.right){
        rightLayer++;
        tmpNode = tmpNode.right;
    }
    
    var count = Math.pow(2, rightLayer) - 1;
    
    if(leftLayer != rightLayer){
        var result = {
            count: 0
        };
        
        solution(root, 1, rightLayer, result);
        
        count += result.count;
    }
    
    return count;
    
    
};

var solution = function(root, curtLayer, layer, result){
    if(curtLayer < layer){
        var end = solution(root.left, curtLayer + 1, layer, result);
        
        if(!end){
            end = solution(root.right, curtLayer + 1, layer, result);
        }
        
        return end;
    }
    
    var isEnd = false;
    if(root.right){
        result.count += 2;
    }else if(root.left){
        result.count++;
        isEnd = true;
    }else{
        isEnd = true;
    }
    
    return isEnd;
};


