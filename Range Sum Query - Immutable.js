/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.datas = nums;
    this.sums = [];
    
    var sum  = 0;
    for(var i = 0; i < nums.length; ++i){
        sum += nums[i];
        this.sums[i] = sum;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.datas[i] + this.sums[j] - this.sums[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
