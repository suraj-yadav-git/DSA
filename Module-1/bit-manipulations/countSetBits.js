/*
Write a function that takes an integer and returns the number of 1 bits present in its binary representation.

input:
11

output:
3

TC: O(logN)

SC: O(1)
*/

const countBit = (A) => {
    let ans = 0;
    while(A > 0) {
        if((A&1) === 1) ans++
        A = A >> 1
    }
    return ans;
}

const A = 11;

console.log(countBit(A));