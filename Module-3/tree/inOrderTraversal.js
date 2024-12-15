/*
Given a binary tree, return the inorder traversal of its nodes' values.

Input:
     1
    / \
   6   2
  /
 3

Output:
3,6,1,2

TC: T(N)

SC: T(H) (where H is height of tree)
*/

import {createTreeFromArray} from './createTreeUtil.js'

const inOrder = (A) => {
    if(!A) return;
    inOrder(A.left);
    console.log(A.data);
    inOrder(A.right);
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
inOrder(root);