var reorderList = function(head) {
	if( head == null || head.next == null ){
		return;
	}

    var array = [];
    var temp = head;
   	while( temp != null ){
   		array.push( temp );
   		temp = temp.next;
   	}

   	var current = head = array[0];
   	current = current.next = array[ array.length - 1 ];

   	var length  = Math.floor( array.length / 2 );
   	var i = 1;

   	while( i < length ){
   		current = current.next = array[ i ];
   		current = current.next = array[ array.length - i - 1 ];
   		++i;
   	}

   	if( array.length % 2 == 1 ){
   		current = current.next = array[i];
   	}

   	current.next = null;

};