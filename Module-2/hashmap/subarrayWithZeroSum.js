/*
Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.
If the given array contains a sub-array with sum zero return 1, else return 0.

input:
A = [4, -1, 1]

output:
1

TC: O(N)

SC: O(N)
*/

const hasSubarrayWithZeroSum = (A) => {
    let preSum = [];
    preSum[0] = A[0];
    for(let i=1; i<A.length; i++) {
        preSum[i] = preSum[i-1] + A[i];
    }
    let hashSet = {};
    for(let i=0; i<preSum.length; i++) {
        if(preSum[i] === 0 || hashSet.has(preSum[i])) return 1;
        hashSet.add(preSum[i]);
    }
    return 0;
}

const A = [4, -1, 1];
console.log(hasSubarrayWithZeroSum(A));