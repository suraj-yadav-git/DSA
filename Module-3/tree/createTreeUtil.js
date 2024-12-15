/*
This is util file and it will be used in other files to preapre tree input and print linked list output.

*/

export const createTreeFromArray = (A) => {
    let root = null;
    let tail = null;
    for(let val of A) {
        let newNode = new Node(val);
        if(tail == null) {
            tail = newNode;
        }else if(tail.left == null) {
            tail.left = newNode;
        } else if(tail.right == null) {
            tail.right = newNode;
            tail = tail.left;
        } 
        if(!root) root = newNode;
    }
    return root;
}

export const createTreeNode = (A) => {
    return new Node(A);
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}