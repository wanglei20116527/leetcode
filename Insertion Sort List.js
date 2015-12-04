/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if( head == null || head.next == null ){
        return head;
    }
    
    var arr = [head];
    
    var tmp = head;
    while(tmp.next != null){
        arr.push( tmp.next );
        tmp = tmp.next;
    }
    
    var len = arr.length;
    for(var i = 1; i < len; ++i){
        var j = i - 1;
        var tmp = arr[i];
        
        while(j >= 0){
            if( tmp.val < arr[j].val ){
                arr[j + 1] = arr[j];
                arr[j] = tmp;
                
            }else{
                break;
            }
            
            --j;
        }
        
        
    }
    
    var sortedHead = arr[0];
    var tmp = sortedHead;
    for(var i = 1; i < len; ++i){
        tmp.next = arr[i];
        tmp = tmp.next;
    }
    
    tmp.next = null;
    
    return sortedHead;
    
};
