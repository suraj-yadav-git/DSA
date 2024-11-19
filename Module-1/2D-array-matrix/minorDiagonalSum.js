/*
You are given a N X N integer matrix. You have to find the sum of all the minor diagonal elements of A.
Minor diagonal of a M X M matrix A is a collection of elements A[i, j] such that i + j = M + 1 (where i, j are 1-based).

input:
[[1, -2, -3],
[-4, 5, -6],
[-7, -8, 9]]

output:
-5

TC:O(N)

SC:O(1)
*/
const minorDiagonalSum = (A) => {
    let sum=0;
    let row=0;
    let colm=A.length-1;
    while(row < A.length && colm >=0 ) {
        sum += A[row][colm];
        row++;
        colm--;
    }
    return sum;
}

const A = [[1, -2, -3],
[-4, 5, -6],
[-7, -8, 9]];

console.log(minorDiagonalSum(A));