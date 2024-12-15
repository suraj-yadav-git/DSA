/*
Given a binary tree, return the postorder traversal of its nodes' values.

Input:
     1
    / \
   6   2
  /
 3

Output:
3,6,2,1

TC: T(N)

SC: T(H) (where H is height of tree)
*/

import {createTreeFromArray} from './createTreeUtil.js'

const postOrder = (A) => {
    if(!A) return;
    postOrder(A.left);
    postOrder(A.right);
    console.log(A.data);
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
postOrder(root);