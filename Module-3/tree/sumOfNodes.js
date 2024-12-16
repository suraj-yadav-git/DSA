/*
Given the root of a binary tree A. Return the sum of all the nodes of the binary tree.

Input:

A =   3
      / \
      6  1
      \   \
       2   7

Output:
19

TC: O(N)

SC: O(H) (where H is height of tree)
*/

import {createTreeFromArray} from './createTreeUtil.js'

const sumOfNodes = (A) => {
    if(!A) return 0;
    return A.data + sumOfNodes(A.left) + sumOfNodes(A.right);
}

//prepare linked list for input
const A  = [4,2,6,3,8,5];
let root = createTreeFromArray(A);

/*
            4
           / \
          2   6
         / \
        3   8
       / 
      5
*/

//main function
console.log(sumOfNodes(root))