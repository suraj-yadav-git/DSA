/*
You are given the root node of a binary tree A. You have to find the number of nodes in this tree.

Input:

Values =  1      
          / \     
         4   3                       
        /         
       2  

Output:
4 

TC: O(N)

SC: O(H) (where H is height of tree)
*/

import {createTreeFromArray} from './createTreeUtil.js'

const countNode = (A) => {
    if(!A) return 0;
    return 1 + countNode(A.left) + countNode(A.right);
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
console.log(countNode(root))