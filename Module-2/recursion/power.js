/*
Implement pow(A, B).
In other words, given A, B Find (A^B).

Input:
A = 2
B = 3

Output:
8

TC: O(N)

SC: O(N)
*/

const getPower = (A, B) => {
    if(A === 0) return 0;
    if(B === 0) return 1;
    if(B % 2 === 0) {
        return getPower(A, B/2) * getPower(A, B/2);
    } else {
        return getPower(A, (B-1)/2) * getPower(A, (B-1)/2) * A;
    }
}

const A = 2
const B = 3

console.log(getPower(A,B));