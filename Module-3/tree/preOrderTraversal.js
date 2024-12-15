/*
Given a binary tree, return the preorder traversal of its nodes' values.

Input:
     1
    / \
   6   2
  /
 3

Output:
1,6,3,2

TC: T(N)

SC: T(H) (where H is height of tree)
*/

import {createTreeFromArray} from './createTreeUtil.js'

const preOrder = (A) => {
    if(!A) return;
    console.log(A.data);
    preOrder(A.left);
    preOrder(A.right);
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
preOrder(root);