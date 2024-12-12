/*
You are given A which is the head of a linked list. Also given is the value B and position C. Complete the function that should insert a new node with the said value at the given position.

Notes:
In case the position is more than length of linked list, simply insert the new node at the tail only.
In case the pos is 0, simply insert the new node at head only.
Follow 0-based indexing for the node numbering.

Input:
A = 1 -> 2
B = 3
C = 1

Output:
1 -> 3 -> 2

TC: O(N)

SC: O(1)

NOTE: We are considering complexity of only insertNode function not other util functions.
*/

import {createLLFromArray, createLLNode, printLinkedList} from './createAndPrintLLUtil.js'

const insertNode = (A, B, C) => {
    let insNode = createLLNode(B);
    if(!A) return insNode;
    if(C === 0) {
        insNode.next = A;
        return insNode;
    }
    
    let K=0;
    let temp = A;
    while(K < C && temp.next !== null) {
        if(++K < C) temp = temp.next;
    }
    insNode.next = temp.next
    temp.next = insNode;
    return A;
}

//prepare linked list for input
const A  = [4,2,6,3,8,5];
let head = createLLFromArray(A); 

//main function
head = insertNode(head, 10, 3);

// print linked list
printLinkedList(head);
