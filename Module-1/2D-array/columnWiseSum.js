/*
You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.

input:
[1,2,3,4]
[5,6,7,8]
[9,2,3,4]

output:
[15,10,13,16]

TC:O(N^2)

SC:O(1)
*/

const colmWiseSum = (A) => {
    let result = [];
    for(let i=0; i<A[0].length; i++) {
        let sum = 0;
        for(let j=0; j<A.length; j++) {
            sum += A[j][i];
        }
        result.push(sum);
    }
    return result;
}

const A = [
    [1,2,3,4],
    [5,6,7,8],
    [9,2,3,4]
];

console.log(colmWiseSum(A));