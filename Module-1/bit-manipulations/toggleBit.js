/*
You are given two integers A and B.
If B-th bit in A is set, make it unset
If B-th bit in A is unset, make it set
Return the updated A value

input:
A = 4
B = 1

output:
6

TC: O(1)

SC: O(1)
*/

const toggleBit = (A, B) => {
    return A ^= (1 << B);
}

const A = 4;
const B = 1;

console.log(toggleBit(A,B));