var fourSum = function(nums, target) {
	nums = nums.sort(function( a, b ){
		return a - b;
	});

	var result = [];

	for( var i = 0; i < nums.length - 3; ++i ){
		if( i >= 1 && nums[i] == nums[i - 1] ){
			continue;
		}
		for( var j = i + 1; j < nums.length - 2; ++j ){
			if( j > i + 1 && nums[j] == nums[j - 1] ){
				continue;
			}

			var third  = j + 1;
			var fourth = nums.length - 1;

			while( third < fourth ){
				var sum = nums[i] + nums[j] + nums[third] + nums[fourth];

				if( sum == target ){
					result.push( [ nums[i], nums[j], nums[third], nums[fourth] ] );

					while( nums[third] == nums[third + 1 ] ){
						third++;
					}

					while( nums[fourth] == nums[ fourth - 1 ] ){
						--fourth;
					}

					third++;
					--fourth;
				}else if( sum < target ){
					while( nums[third] == nums[third + 1 ] ){
						third++;
					}
					++third;
				}else{
					while( nums[fourth] == nums[ fourth - 1 ] ){
						--fourth;
					}
					--fourth;
				}
			}
		}
	}
	return result;
};


