var solution = function( current, i, n, k, result ){
	if( current.length == k ){
		result.push( current );
		return;
	}

	if( n - i + 1 < k - current.length ){
		return;
	}

	var tempCurrent = current.slice();
	solution( tempCurrent, i + 1, n, k, result );

	var tempCurrent = current.slice();
	tempCurrent.push( i );
	solution( tempCurrent, i + 1, n, k, result );
};

var combine = function(n, k) {
	if( n < k || k <= 0){
		return [];
	}

    var result = [];

    solution( [], 1, n, k, result );

    return result;
};