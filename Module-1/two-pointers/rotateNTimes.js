/*
Given an integer array A of size N and an integer B, 
you have to return the same array after rotating it B times towards the right.

input:
A = [1, 2, 3, 4]
B = 2

output:
[3, 4, 1, 2]

TC: O(N)

SC: O(1)
*/

const rotateArray = (A, B) => {
    B = B%A.length;
    A = reverseArr(A, 0, A.length-1);
    A = reverseArr(A, 0, B-1);
    A = reverseArr(A, B, A.length-1);
    return A;
}

const reverseArr = (A, p1, p2) => {
    while(p1 < p2) {
        [A[p1],A[p2]] = [A[p2],A[p1]];
        p1++;
        p2--;
    }
    return A;
}

const A = [1, 2, 3, 4];
const B = 2;

console.log(rotateArray(A, B));