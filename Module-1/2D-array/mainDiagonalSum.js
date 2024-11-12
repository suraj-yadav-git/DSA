/*
You are given a N X N integer matrix. You have to find the sum of all the main diagonal elements of A.
Main diagonal of a matrix A is a collection of elements A[i, j] such that i = j.

input:
3 3 1 -2 -3 -4 5 -6 -7 -8 9

output:
15

TC:O(N)

SC:O(1)
*/

const sumOfDiagonal = (A) => {
    let sum=0;
    let row=0;
    let colm=0;
    while(row < A.length && colm < A.length) {
        sum += A[row][colm];
        row++; colm++;
    }
    return sum;
}

const A = [
    [1, -2, -3],
    [-4, 5, -6],
    [-7, -8, 9]
]

console.log(sumOfDiagonal(A));