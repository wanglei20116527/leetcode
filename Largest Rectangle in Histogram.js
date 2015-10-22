var largestRectangleArea = function( height ) {
    height.push(0);

 	var stack = [0];

 	var maxArea = height[0];

 	var length = height.length;

 	for( var i = 1; i < length; ++i ){
 		if( height[i] < height[ stack[ stack.length - 1 ] ] ){
 			while( stack.length && height[i] < height[ stack[ stack.length - 1 ] ] ){
 				var index = stack.pop();
 				var prevIndex = stack.length == 0 ? - 1 : stack[ stack.length - 1 ];
 				maxArea = Math.max( maxArea, ( i - prevIndex - 1 ) * height[ index ]  );
 			}
 		}

 		stack.push(i);
 	}

 	return maxArea;
};