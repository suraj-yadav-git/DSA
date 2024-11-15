/*
Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.
NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

input:
A = [1, 2, 2, 3, 1]

output:
3

TC: O(N)

SC: O(1)
*/

const findUniqueNumber = (A) => {
    let ans = A[0];
    for(let i=1; i<A.length; i++) {
        ans ^= A[i];
    }
    return ans;
}

const A = [1, 2, 2, 3, 1];

console.log(findUniqueNumber(A));