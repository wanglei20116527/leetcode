var minPathSum = function( grid ) {
	var lengthX = grid.length;
	var lengthY = grid[0].length;

	for( var i = 1; i < lengthX; ++i ){
		grid[i][0] += grid[i - 1][0];
	}

	for( var i = 1; i < lengthY; ++i ){
		grid[0][i] += grid[0][i - 1];
	}

	for( var i = 1; i < lengthX; ++i ){
		for( var j = 1; j < lengthY; ++j ){
			grid[i][j] += Math.min( grid[i][j -1], grid[i -1][j] );
		}
	}

	return grid[ lengthX - 1 ][ lengthY - 1 ];
};