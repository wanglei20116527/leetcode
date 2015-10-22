var getPermutation = function(n, k) {
	var sumOfKinds = 1;
	for( var i = 2; i <= n; ++i ){
		sumOfKinds *= i;
	}

	if( sumOfKinds < k ){
		return "";
	}

	--k;

	var result = "";

	var used = new Array( n );
	for( var i = 0; i < n; ++i ){
		used[i] = false;
	}

	var numberOfCandidates = n;
	var tempKinds = sumOfKinds;

	for( var i = n; i > 0 && k > 0; --i ){
		tempKinds = tempKinds / numberOfCandidates;

		var index = Math.floor( k / tempKinds );

		var j = 0;
		var count = 0;

		while( count < index ){
			if( !used[j] ){
				count++;
			}
			++j;
		}

		while( used[j] ){
			++j
		}

		result += ( j + 1 );
		used[j] = true;

		numberOfCandidates--;
		k %= tempKinds;
	}

	for( var i = 0; i < used.length; ++i ){
		if( !used[i] ){
			result += ( i + 1 );
		}
	}

	return result;
};