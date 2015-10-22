var minimumTotal = function( triangle ) {
	var queue = [ triangle[0][0] ];

	for( var i = 1; i < triangle.length; ++i ){

		for( var j = 0; j < triangle[i].length; ++j ){
			 if( j == 0 ){
			 	queue.push( queue[j] + triangle[i][j] );
			 }else if( j == triangle[i].length - 1 ){
			 	queue.push( queue[j - 1] + triangle[i][j] );
			 }else{
			 	queue.push( Math.min( queue[j], queue[j - 1] ) + triangle[i][j] );
			 }
		}

		for( var j = 0; j < i; ++j ){
			queue.shift();
		}
	}

	var min = queue[0];

	for( var i = 1; i < queue.length; ++i ){
		min = Math.min( min, queue[i] );
	}

	return min;
};