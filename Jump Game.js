var canJump = function( nums ) {
	for( var i = 0; i < nums.length - 1; ++i ){
		if( nums[i] === 0 ){
			var j = i - 1;
			while( j >= 0 ){
				if( nums[j] + j > i ){
					break;
				}
				--j;
			}

			if( j < 0 ){
				return false;
			}
		}
	}

	return true;
};
