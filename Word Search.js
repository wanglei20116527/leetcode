function inPath( point, path ){
	for( var i = 0; i < path.length; ++i ){
		if( point == path[i] ){
			return true;
		}
	}

	return false;
}

function solution( path, xIndex, yIndex, wordIndex, board, word ){
	if( wordIndex >= word.length ){
		return true;
	}

	var result = false;
	var tempPath;

	if( xIndex >= 1 && board[xIndex - 1][yIndex] == word[ wordIndex ] && !inPath( (xIndex - 1) + " " + yIndex, path ) ){
		tempPath = path.slice();
		tempPath.push( (xIndex - 1) + " " + yIndex );
		result = solution( tempPath, xIndex - 1, yIndex, wordIndex + 1, board, word );
		if( result ){
			return true;
		}
	}

	if( xIndex + 1 < board.length && board[xIndex + 1][yIndex] == word[ wordIndex ] && !inPath( (xIndex + 1) + " " + yIndex, path ) ){
		tempPath = path.slice();
		tempPath.push( (xIndex + 1) + " " + yIndex );
		result = solution( tempPath, xIndex + 1, yIndex, wordIndex + 1, board, word );
		if( result ){
			return true;
		}
	}

	if( yIndex >= 1 && board[xIndex][yIndex - 1] == word[ wordIndex ] && !inPath( xIndex + " " + ( yIndex - 1 ), path ) ){
		tempPath = path.slice();
		tempPath.push(  xIndex + " " + ( yIndex - 1 ) );
		result = solution( tempPath, xIndex, yIndex - 1, wordIndex + 1, board, word );
		if( result ){
			return true;
		}
	}

	if( yIndex + 1 < board[xIndex].length && board[xIndex][yIndex + 1] == word[ wordIndex ] && !inPath( xIndex + " " + ( yIndex + 1 ), path ) ){
		tempPath = path.slice();
		tempPath.push(  xIndex + " " + ( yIndex + 1 ) );
		result = solution( tempPath, xIndex, yIndex + 1, wordIndex + 1, board, word );
		if( result ){
			return true;
		}
	}

	return false;;
}

var exist = function(board, word) {
	for( var i = 0; i < board.length; ++i ){
		for( var j = 0; j < board[i].length; ++j ){
			if( board[i][j] == word[0] ){
				var result = solution( [ i + " " + j ], i, j, 1, board, word );
				if( result ){
					return true;
				}
			}
		}
	}

	return false;
};