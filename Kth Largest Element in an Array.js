var Heap = function(){
	this.cache = [0];
	this.size  = 1;
};

Heap.prototype.getSize = function(){
	return this.size - 1;
};

Heap.prototype.insert = function( obj ){
	this.cache[ this.size++ ] = obj;

	var i = this.size - 1;

	var parentIndex;

	while( i > 0 ){
		parentIndex = Math.floor( i / 2 );

		if( parentIndex <= 0 ||  this.cache[ parentIndex ].value > obj.value ){
			break;
		}

		this.cache[ i ] = this.cache[ parentIndex ];

		i = parentIndex;
	}

	this.cache[i] = obj;
};

Heap.prototype.delete = function(){
	var result = this.cache[ 1 ];

	this.cache[ 1 ] = this.cache[ this.size - 1 ];
	this.size--;

	var i = 1;

	while( i < this.size ){
		var maxChildIndex;

		if( i * 2 + 1 < this.size ){
			maxChildIndex = this.cache[ i * 2 + 1 ].value > this.cache[ i * 2 ].value ? i * 2 + 1 : i * 2;
		}else if( i * 2 < this.size ){
			maxChildIndex = i * 2;
		}else{
			break;
		}

		if( this.cache[i].value < this.cache[ maxChildIndex ].value ){
			var temp = this.cache[i];
			this.cache[ i ] = this.cache[ maxChildIndex ];
			this.cache[ maxChildIndex ] = temp;

			i = maxChildIndex;
		}else{
			break;
		}
	}

	return result;
};

Heap.prototype.buildHeap = function( arr ){
	for( var i = 0; i < arr.length; ++i ){
		this.insert({
			index: i ,
			value: arr[i]
		});
	}
};


var findKthLargest = function(nums, k) {
	var heap = new Heap();
	heap.buildHeap( nums );

	var result = null;
	for( var i = 0; i < k; ++i ){
		result = heap.delete();
	}

	return result.value; 
};
