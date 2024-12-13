/*
You are given the head of a linked list A and an integer B. You need to find the B-th element of the linked list and return its value.
Note : Follow 0-based indexing for the node numbering.

Input:
A = 4 -> 3 -> 2 -> 1
B = 1

Output:
3

TC: O(N)

SC: O(1)

NOTE: We are considering complexity of only insertNode function not other util functions.
*/

import {createLLFromArray} from './createAndPrintLLUtil.js'

const searchKthEle = (A, B) => {
    let temp = A;
    for(let i=1; i<=B; i++) {
        temp = temp.next;
    }
    return temp.data;
}

//prepare linked list for input
const A  = [4,2,6,3,8,5];
const B = 3;
let head = createLLFromArray(A);

//main function
console.log(searchKthEle(head, B));