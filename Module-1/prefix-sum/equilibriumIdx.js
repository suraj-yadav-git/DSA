/*
You are given an array A of integers of size N.
Your task is to find the equilibrium index of the given array
The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:
Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

input:
A = [-7, 1, 5, 2, -4, 3, 0]

output:
3

TC: O(N)
SC: O(N)
*/

const createPrefixSum = (A) => {
    const prefixSum = [];
    prefixSum[0] = A[0];
    for(let i=1; i<A.length; i++) {
        prefixSum[i] = prefixSum[i-1] + A[i];
    }
    return prefixSum;
}

const checkEquilibrium = (A) => {
    const prefixSum = createPrefixSum(A);
    const equiliBriumIdx = [];

    for(let i=0; i<A.length; i++) {
        let leftRange,rightRange;
        if(i > 0) {
            leftRange = [0, i-1];
        } else {
            leftRange = []
        }

        if(i < A.length) {
            rightRange = [i+1, A.length-1];
        } else {
            rightRange = []
        }
        
        const rightRangeSum = rightRange.length === 0 ? 0 : prefixSum[A.length-1] - prefixSum[i];
        const leftRangeSum = leftRange.length === 0 ? 0 : prefixSum[i-1];

        if(rightRangeSum === leftRangeSum) {
            equiliBriumIdx.push(i);
        }
    }
    if(equiliBriumIdx.length > 0) {
        return equiliBriumIdx[0];
    } else {
        return -1;
    }
}

A = [-7, 1, 5, 2, -4, 3, 0];
console.log(checkEquilibrium(A));