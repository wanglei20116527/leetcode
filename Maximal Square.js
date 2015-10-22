var maximalSquare = function(matrix) {
	if( matrix.length == 0 ){
		return 0;
	}
	var lengthX = matrix.length;
	var lengthY = matrix[0].length;

	var length   = Math.min( lengthX, lengthY );
	var array    = new Array( length );
	var position = new Array( length );
	for( var i = 0; i < length; ++i ){
		array[i] = 0;
		position[i] = new Array(2);
	}

	if( lengthX <= lengthY ){
		for( var i = 0; i < lengthX; ++i ){
			var count      = 0;
			var startIndex = 0;
			var endIndex   = 0;
			for( var j = 0; j < lengthY; ++j ){
				if( matrix[i][j] == 1 ){
					count++;
					endIndex = j;
				}else{
					if( count > array[i] ){
						array[i] = count;
						position[i][0] = startIndex;
						position[i][1] = endIndex;
 					}
					count = 0;
					startIndex = j + 1;
				}
			}

			if( count > array[i] ){
				array[i] = count;
				position[i][0] = startIndex;
				position[i][1] = endIndex;
 			}
		}

	}else{
		for( var i = 0; i < lengthY; ++i ){
			var count      = 0;
			var startIndex = 0;
			var endIndex   = 0;
			for( var j = 0; j < lengthX; ++j ){
				if( matrix[j][i] == 1 ){
					count++;
					endIndex = j;
				}else{
					if( count > array[i] ){
						array[i] = count;
						position[i][0] = startIndex;
						position[i][1] = endIndex;
					}
					count = 0;
					startIndex = j + 1;
				}
			}
			if( count > array[i] ){
				array[i] = count;
				position[i][0] = startIndex;
				position[i][1] = endIndex;
 			}
		}
	}

	var max = 0;
	for( var i = 0; i < length; ++i ){
		max = Math.max( max, array[i] );
	}

	for( var i = max; i >= 1; --i ){
		debugger;
		for( var j = 0; j < length; ++j ){
			if( array[j] >= i && j + i <= length ){

				var count = 1;
				var maxStartIndex = position[j][0];
				var minEndIndex   = position[j][1];

				while( count <= i ){
					if( array[j + count] >= i ){
						maxStartIndex = Math.max(maxStartIndex , position[j + count][0] );
						minEndIndex   = Math.min(minEndIndex   , position[j + count][1] );
						count++;
					}else{
						break;
					}
				}

				if( count == i && minEndIndex - maxStartIndex + 1 >= i ){
					return i * i;
				}
			}
		}
	}

	return 0;

};