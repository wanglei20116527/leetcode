var solution = function( current, index, s, result ){
	if( current.length == 4 ){
		if( index == s.length ){
			result.push( current.join('.') );
		}
		return;
	}

	if( index >= s.length ){
		return;
	}

	var maxSize = s.length - index - 3 + current.length;
	maxSize = maxSize > 3 ? 3: maxSize;

	var minSize = s.length - index - ( 3 - current.length ) * 3;

	minSize = minSize < 1 ? 1: minSize;

	for( var i = maxSize; i >= minSize; --i ){
		var temp = s.substr( index, i );
		if( parseInt( temp ) > 255 || ( i > 1 && temp[0] == '0' ) ){
			continue;
		}

		var tempCurrent = current.slice();

		tempCurrent.push( temp );
		solution( tempCurrent, index + i, s, result );
	}
};


var restoreIpAddresses = function( s ) {
	if( s.length < 4 || s.length > 12 ){
		return [];
	}

    var result = [];

    solution( [], 0, s, result );

    return result;
};