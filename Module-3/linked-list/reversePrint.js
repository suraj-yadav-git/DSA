/*
You are given a singly linked list having head node A. You need to print the linked list in reverse order.
Note :- The node values must be space separated. You must give a newline after printing all the nodes.

Input:
A = 1 -> 2 -> 3 -> 4 -> 5 -> NULL 

Output:
5 4 3 2 1

TC: O(N)

SC: O(N)

NOTE: We are considering complexity of only insertNode function not other util functions.
*/

import {createLLFromArray} from './createAndPrintLLUtil.js'

const printRev = (A) => {
    if(!A) return;
    printRev(A.next);
    console.log(A.data);
}

//prepare linked list for input
const A  = [4,2,6,3,8,5];
let head = createLLFromArray(A);

//main function
printRev(head);
