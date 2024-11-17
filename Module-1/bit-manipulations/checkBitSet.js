/*
You are given two integers A and B.
Return 1 if B-th bit in A is set
Return 0 if B-th bit in A is unset

Note:
The bit position is 0-indexed, which means that the least significant bit (LSB) has index 0.

input:
5

output:
2

TC: O(1)

SC: O(1)
*/

const checkBit = (A, B) => {
    if((A & (1<<B)) === (1<<B))
        return 1;
    else return 0;
}

const A = 5;
const B = 2;

console.log(checkBit(A, B));