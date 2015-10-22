var solution = function( nums, startIndex, endIndex ){
	if( endIndex - startIndex < 2 ){
		return -1;
	}

	var middleIndex = parseInt( ( startIndex + endIndex ) / 2 );
	if( nums[ middleIndex ] > nums[ middleIndex - 1 ] && nums[ middleIndex ] > nums[ middleIndex + 1 ] ){
		return middleIndex;

	}else{
		var leftResult = solution( nums, startIndex, middleIndex );
		if( leftResult != -1 ){
			return leftResult;
		}

		var rightResult = solution( nums, middleIndex, endIndex );
		if( rightResult != -1 ){
			return rightResult;
		}
	}

	return -1;
}

var findPeakElement = function( nums ) {
	if( nums.length == 1 ){
		return 0;
	}

	if( nums[0] > nums[1] ){
		return 0;
	}else if( nums[ nums.length - 2 ] < nums[ nums.length - 1 ] ){
		return nums.length - 1;
	} else {
		return solution( nums, 0, nums.length - 1 );
	}
};