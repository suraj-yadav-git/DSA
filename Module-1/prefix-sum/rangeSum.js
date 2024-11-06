/*
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

input:
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]

output:
[10, 5]

TC: O(N)
SC: O(N)
*/

// create prefix array
const createPrefixSum = (A) => {
    const preArray = [];
    preArray[0] = A[0];
    for(i=1; i<A.length; i++) {
        preArray[i] = preArray[i-1] + A[i];
    }
    return preArray;
}

const rangeSum = (A, B) => {
    //create prefix sum
    const preSum = createPrefixSum(A);
    const rangeSum = [];

    //loop and prepare range sum for each range
    for(const q of B) {
        if(q[0] === 0) {
            rangeSum.push(preSum[q[1]])
        } else {
            rangeSum.push(preSum[q[1]] - preSum[q[0]-1])
        }
    }
    return rangeSum;
}

A = [1, 2, 3, 4, 5];
B = [[0, 3], [1, 2]];

console.log(rangeSum(A,B));
