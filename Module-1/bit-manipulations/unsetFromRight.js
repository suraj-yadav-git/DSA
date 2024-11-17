/*
Given an integer A. Unset B bits from the right of A in binary.

For example, if A = 93 and B = 4, the binary representation of A is 1011101.
If we unset the rightmost 4 bits, we get the binary number 1010000, which is equal to the decimal value 80.

input:
A = 93
B = 4

output:
24

TC: O(N)

SC: O(1)
*/

const unsetFromRight = (A, B) => {
    let i = 0;
    while(i < B) {
        if((A ^ (1 << i)) < A) A ^= (1 << i);
        i++
    }
    return A;
}

const A = 93;
const B = 4;

console.log(unsetFromRight(A,B));