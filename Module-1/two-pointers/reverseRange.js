/*
Given an array A of N integers and also given two integers B and C. 
Reverse the elements of the array A within the given inclusive range [B, C].

input:
A = [1, 2, 3, 4]
B = 2
C = 3

output:
[1, 2, 4, 3]

TC: O(N)

SC: O(1)
*/

const reverseRange = (A, B, C) => {
    let s = B;
    let e = C;
    while(s < e) {
        [A[s],A[e]] = [A[e],A[s]];
        s++;
        e--;
    }
    return A;
}

const A = [1, 2, 3, 4];
const B = 2;
const C = 3;

console.log(reverseRange(A,B,C));