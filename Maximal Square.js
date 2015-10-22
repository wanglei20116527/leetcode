/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if( matrix == null || matrix.length == 0 || matrix[0].length == 0 ){
        return 0;
    }
    
    var row = matrix.length;
    var col = matrix[0].length;
    
    var sides = [];
    for(var i = 0; i < row; ++i){
        sides[i] = (matrix[i][0] == '0') ? [0] : [1];
    }
    
    for(var i = 0; i < col; ++i){
        sides[0][i] = (matrix[0][i] == '0') ? 0 : 1;
    }
    
    var result = 0;
    for(var i = 0; i < col; ++i){
        if(sides[0][i] == 1){
            result = 1;
            break;
        }
    }
    
    for(var i = 1; i < row; ++i){
        for(var j = 1; j < col; ++j){
            if( matrix[i][j] == '1' ){
                sides[i][j] = Math.min( sides[i - 1][j], sides[i][j - 1], sides[i - 1][j - 1] ) + 1;
            }else{
                sides[i][j] = 0;
            }
           
            
            if( result < sides[i][j] ){
                result = sides[i][j]
            }
        }
    }
    
    return result * result;
    
};