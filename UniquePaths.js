var uniquePaths = function(m, n) {
	if( m == 1 || n == 1 ){
		return 1;
	}

	var result = 1;

	for( var i = m; i <= m + n - 2; ++i ){
		result *= i;
	}

	for( var i = 2; i < n; ++i ){
		result /= i;
	}

	return result;
};