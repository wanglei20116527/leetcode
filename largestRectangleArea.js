/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function( height ) {
    if( height.length == 0 ){
    	return 0;
    }

    height.push( 0 );

    var indexStack = [];

    indexStack.push( 0 );

    var maxArea = 0;

    for( var i = 1; i < height.length; ++i ){
    	if( height[ i ] >= height[ indexStack[ indexStack.length - 1  ] ]  ){
    		indexStack.push( i ); 
    	}else{
    		var index = indexStack.pop();

    		while( height[ index ] > height[i]  ){
    			var tempArea = ( i - index ) * height[ index ];
    			maxArea = maxArea > tempArea  ? maxArea :  tempArea;
    			index = indexStack.pop();
    		}
    	}
    }

    return maxArea;
};