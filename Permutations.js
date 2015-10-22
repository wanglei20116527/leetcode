var solution = function( used, nums, current, result ){
	var length = nums.length;

	if( current.length == length ){
		result.push( current );
		return;
	}

	for( var i = 0; i < length; ++i ){
		if( !used[i] ){
			var tempUsed = used.slice();
			tempUsed[i] = true;

			var tempCurrent = current.slice();
			tempCurrent.push( nums[i] );

			solution( tempUsed, nums, tempCurrent, result );
		}
	}
};

var permute = function( nums ) {
    var result = [];

    var length = nums.length;

    solution( new Array( length ), nums, [], result );

    return result;
};