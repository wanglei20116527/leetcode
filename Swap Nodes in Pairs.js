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
var swapPairs = function(head) {
   if( head == null || head.next == null ){
       return head;
   }
   
   count = 0;
   var prevPrev = null;
   var prev = head;
   var curt = head.next;
   head = curt;

   do{
      if( count % 2 == 0 ){
          if( prevPrev != null ){
              prevPrev.next = curt;
          }
          
           prev.next = curt.next;
           curt.next = prev;
           curt = prev.next;
      }else{
          prevPrev = prev;
          prev = curt;
          curt = curt.next;
      }
      count++;
   }while(curt);
   prev.next = null;
   
   return head;
};
