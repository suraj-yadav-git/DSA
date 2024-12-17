/*
Given heads of two linked lists A and B, check if they are identical i.e. each of their corresponding nodes should contain the same data. 
The two given linked lists may or may not be of the same length.

Input:
A = 4 -> 3 -> 2 -> 1
B = 4 -> 2 -> 3 -> 1

Output:
0

TC: O(N)

SC: O(N)

NOTE: We are considering complexity of only insertNode function not other util functions.
*/
import {createLLFromArray} from './createAndPrintLLUtil.js'

const compareLL = (A,B) => {
    while(A && B){
       
        if(A.data !=B.data){
            return false;
        }
        A = A.next;
        B = B.next;
    }
    return  !A && !B;
}

//prepare linked list for input
const A  = [4,2,6,3,8,5];
const B  = [4,2,6,3,8,5];
let head1 = createLLFromArray(A);
let head2 = createLLFromArray(B);

//main function
console.log(compareLL(head1,head2));
