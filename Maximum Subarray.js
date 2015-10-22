// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
	var maxValue = nums[ nums.length - 1 ];

	for( var i = nums.length - 2; i >= 0; --i ){
		if( nums[i + 1] > 0 ){
			nums[i] += nums[i + 1];
		}

		if( nums[i] > maxValue ){
			maxValue = nums[i];
		}
	}

	return maxValue;
};