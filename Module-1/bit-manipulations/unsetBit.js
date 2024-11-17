/*
You are given two integers A and B.
If B-th bit in A is set, make it unset.
If B-th bit in A is unset, leave as it is.
Return the updated A value.

Note:
The bit position is 0-indexed, which means that the least significant bit (LSB) has index 0.

input:
A = 5
B = 2

output:
1

TC: O(1)

SC: O(1)
*/

const unsetBit = (A, B) => {
    let ans = A ^ (1 << B);
    if(ans > A) return A;
    else return ans;
}

const A = 5;
const B = 2;

console.log(unsetBit(A,B));