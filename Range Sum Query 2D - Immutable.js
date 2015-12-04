/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.data = [];
    
    var row = matrix.length;
    if( row > 0 ){
        var col = matrix[0].length;
        
        for( var i = 0; i < row; ++i ){
            this.data[i] = [];
            
            for( var j = 0; j < col; ++j ){
                if( i == 0 && j == 0 ){
                    this.data[i][j] = matrix[i][j];
                    
                }else if( i == 0 ){
                    this.data[i][j] = matrix[i][j] + this.data[i][j - 1];
                    
                }else if( j == 0 ){
                    this.data[i][j] = matrix[i][j] + this.data[i - 1][j];
                    
                }else{
                    this.data[i][j] = matrix[i][j] + this.data[i - 1][j] + this.data[i][j - 1] - this.data[i - 1][j - 1];
                }
            }
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    var sum = this.data[row2][col2];
    
    if( row1 >= 1 && col1 >= 1){
        sum -= ( this.data[row1 - 1][col2] + this.data[row2][col1 - 1] - this.data[row1 - 1][col1 - 1] );
        
    }else if( row1 >= 1 ){
        sum -= this.data[row1 - 1][col2];
        
    }else if( col1 >= 1 ){
        sum -= this.data[row2][col1 - 1];
    }
    
    return sum;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
