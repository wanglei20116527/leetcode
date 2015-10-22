var searchMatrix = function(matrix, target) {
	if( matrix.length == 0 ){
		return false;
	}

    var row = matrix.length;
    var col = matrix[0].length;

    var start = 0;
    var end   = row * col - 1;

    while( start <= end ){
    	var middle = parseInt( (start + end) / 2 );

    	var indexes = getIndexes( middle, row, col );

    	if( target == matrix[ indexes[0] ][ indexes[1] ] ){
    		return true;
    	}else if( target > matrix[ indexes[0] ][ indexes[1] ] ){
    		start = middle + 1;
    	}else{
    		end = middle - 1;
    	}
    }

    return false;
};

var getIndexes = function( index, row, col ){
	var indexes = [0, 0];

	indexes[0] = Math.floor( index / col );
	indexes[1] = index % col;

	return indexes;
};