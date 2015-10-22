var solution = function( index, current, result, nums ){
	var length = nums.length;
	
	if( index >= length ){
		return;
	}

	for( var i = index; i < length; ++i ){
		var tempCurrent = current.slice();

		tempCurrent.push( nums[i] );

		result.push( tempCurrent );

		solution( i + 1, tempCurrent, result, nums );
	}
};

var subsets = function(nums) {
    nums = nums.sort(function( a, b ){
    	return a - b;
    });

    var result = [[]];

    solution( 0, [], result, nums );

    return result;
};