/*
You are given two integers A and B.
Set the A-th bit and B-th bit in 0, and return output in decimal Number System.

Note:
The bit positions are 0-indexed, which means that the least significant bit (LSB) has index 0.

input:
A = 3
B = 5

output:
40

TC: O(1)

SC: O(1)
*/

const setBit = (A, B) => {
    let ans = 0;
    ans |= (1 << A);
    ans |= (1 << B);
    return ans;
}

const A = 3;
const B = 5;

console.log(setBit(A, B));