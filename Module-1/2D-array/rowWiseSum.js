/*
You are given a 2D integer matrix A, return a 1D integer array containing row-wise sums of original matrix.

input:
[1,2,3,4]
[5,6,7,8]
[9,2,3,4]

output:
[10,26,18]

TC:O(N^2)

SC:O(1)
*/

const rowWiseSum = (A) => {
    let result = [];
    for(let i=0; i<A.length; i++) {
        let sum=0;
        for(let j=0; j<A[i].length; j++) {
            sum += A[i][j];
        }
        result.push(sum);
    }
    return result;
}
const A = [
    [1,2,3,4],
    [5,6,7,8],
    [9,2,3,4]
]
console.log(rowWiseSum(A));