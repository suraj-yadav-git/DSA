/*
Given a 2D integer array A, return the transpose of A.
The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
NOTE: row and colms size can be diffrent

input:
A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

output:
[[1, 4, 7], [2, 5, 8], [3, 6, 9]]

TC: O(N^2)

SC: O(N^2)
*/

const getTranspose = (A) => {
    const B = Array(A[0].length).fill().map(() => {
        return Array(A.length).fill(null);
    })
    for(let i=0; i<A.length; i++) {
        for(let j=0; j<A[i].length; j++) {
            B[j][i] = A[i][j];
        }
    }
    return B;
}
//const A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const A = [[1, 1, 1], [2, 2, 2]];
console.log(getTranspose(A));