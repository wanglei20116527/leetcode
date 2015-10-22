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

 var detectCycle = function(head) {
    if( head == null){
        return null;
    }
    
    var slow = head;
    var fast = head;
    
    while(fast.next != null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
        
        if( slow == fast ){
            slow = head;
            while(slow != fast){
                slow = slow.next;
                fast = fast.next;
            }
            
            return slow;
        }
    }
    
    return null;
};
 
// var detectCycle = function(head) {
//     if( head == null ){
//         return null;
//     }
    
//     var tmp = head;
//     while( tmp.next != null ){
//         if( tmp.count !== undefined ){
//             delete tmp.count;
//             return tmp;
//         }
        
//         tmp.count = 1;
        
//         tmp = tmp.next;
//     }
    
//     return null;
// };

// var detectCycle = function(head) {
//     if( head == null ){
//         return head;
//     }
    
//     var arr = [];
    
//     var tmp = head;
//     while( tmp.next != null ){
//         for(var i = 0; i < arr.length; ++i){
//             if( tmp == arr[i] ){
//                 return tmp;
//             }
//         }
        
//         arr.push( tmp );
//         tmp = tmp.next;
//     }
    
//     return null;
// };
