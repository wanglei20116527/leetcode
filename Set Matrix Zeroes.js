/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var row = matrix.length;
    if( row === 0 ){
        return;
    }
    
    var column = matrix[0].length;
    
    var flags = new Array( row + column );
    
    debugger;
    
    for(var i = 0; i < row; ++i){
        for(var j = 0; j < column; ++j){
            if(matrix[i][j] == 0){
                flags[i] = true;
                flags[row + j] = true;
            }
        }
    }
    
    for(var i = 0; i < row; ++i){
        if(flags[i]){
            for(var j = 0; j < column; ++j){
                matrix[i][j] = 0;
            }
        }
    }
    
    for(var i = row; i < flags.length; ++i){
        if(flags[i]){
            for(var j = 0; j < row; ++j){
                matrix[j][i - row] = 0;
            }
        }
    }
    
};