/*
You are given an array A of length N and Q queries given by the 2D array B of size Q×2.
Each query consists of two integers B[i][0] and B[i][1].
For every query, your task is to find the count of even numbers in the range from A[B[i][0]] to A[B[i][1]].

input:
A = [1, 2, 3, 4, 5]
B = [   [0, 2] 
        [2, 4]
        [1, 4]   ];

output:
[1, 1, 2]

TC: O(N)
SC: O(N)
*/

const createEvenPrefixSum = (A) => {
    const prefixSum = [];
    prefixSum[0] = 1 - (A[0]%2);

    for(let i=1; i<A.length; i++) {
        prefixSum[i] = prefixSum[i-1] + (1 - (A[i]%2));
    }
    return prefixSum;
}

const rangeEvenSum = (A, B) => {
    const prefixSum = createEvenPrefixSum(A);
    const RangeSum = [];

    for(let i=0; i<B.length; i++) {
        if(B[i][0] === 0) {
            RangeSum.push(prefixSum[B[i][1]]);
        } else {
            RangeSum.push(prefixSum[B[i][1]] - prefixSum[B[i][0] - 1]);
        }
    }
    return RangeSum;
}

A = [1, 2, 3, 4, 5];
B = [[0, 2],[2, 4],[1, 4]];

console.log(rangeEvenSum(A,B));
