var generateParenthesis = function( n ) {
    var leftParenthesis  = [];
    var rightParenthesis = [];

    for( var i = 0; i < n; ++i ){
    	leftParenthesis.push( "(" );
    	rightParenthesis.push( ")" );
    }

    var result = [];

    generate( "", [], leftParenthesis, rightParenthesis, result );

    return result;
};

function generate( resultString, stack, leftParenthesis, rightParenthesis, result ){
	if( stack.length == 0 && leftParenthesis.length == 0 && rightParenthesis.length == 0 ){
		result.push( resultString );
		return;
	}

	if( leftParenthesis.length != 0 ){
		var leftStackTemp = stack.concat();
		leftStackTemp.push( "(" );
		var leftParenthesisTemp = leftParenthesis.concat();
		leftParenthesisTemp.pop();

		generate( resultString + "(", leftStackTemp, leftParenthesisTemp , rightParenthesis.concat(), result );
	}

	if( rightParenthesis.length != 0 && stack.length !=0 ){
		var rightStackTemp = stack.concat();
		rightStackTemp.pop();

		var rightParenthesisTemp = rightParenthesis.concat();
		rightParenthesisTemp.pop();

		generate( resultString + ")", rightStackTemp, leftParenthesis.concat(), rightParenthesisTemp, result );	
	}
}