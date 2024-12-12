/*
This is util file and it will be used in other files to preapre linked list input and print linked list output.
*/

export const createLLFromArray = (A) => {
    let head = null;
    let tail = null;
    for(let val of A) {
        let newNode = new Node(val);
        if(tail !== null) tail.next = newNode;
        if(!head) head = tail;
        tail = newNode;
    }
    return head;
}

export const printLinkedList = (head) => {
    let temp = head;
    while(temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
}

export const createLLNode = (A) => {
    return new Node(A);
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}