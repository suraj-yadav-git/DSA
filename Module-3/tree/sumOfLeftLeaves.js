/*
Given a binary tree, find and return the sum of node value of all left leaves in it.

Input:

    3
   / \
  9  20
    /  \
   15   7

Output:
24

TC: O(N)

SC: O(H) (where H is height of tree)
*/

import {createTreeFromArray} from './createTreeUtil.js'

const sumOfLeftLeaves = (A, prev) => {
    if(!A) return 0;
    if(!A.left && !A.right && A === prev.left) return A.data;
    return sumOfLeftLeaves(A.left, A) + sumOfLeftLeaves(A.right, A);
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
console.log(sumOfLeftLeaves(root))