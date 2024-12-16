/*
You are given the root node of a binary tree A. You have to find the height of the given tree.
A binary tree's height is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input:

 Values =  1      
          / \     
         4   3                       
        /         
       2                                     

Output:
3

TC: O(N)

SC: O(H) (where H is height of tree)
*/

import {createTreeFromArray} from './createTreeUtil.js'

const treeHeight = (A) => {
    if(!A) return 0;
    let leftHeight = treeHeight(A.left);
    let rightHeight = treeHeight(A.right);
    return 1 + Math.max(leftHeight, rightHeight);
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
console.log(treeHeight(root))