/*
Give a N * N square matrix A, return an array of its anti-diagonals. 
Look at the example for more details.

input:
1 2 3
4 5 6
7 8 9

output:
1 0 0
2 4 0
3 5 7
6 8 0
9 0 0

TC:O(N^2)

SC:O(N^2)
*/

const getAntiDiagonal = (A) => {
    let antiDiagonal = [];
    for(let j=0; j<A.length; j++) {
        let row = 0;
        let colm = j;
        let antiRow = [];

        while(row < A.length && colm >=0) {
            antiRow.push(A[row][colm]);
            row++; colm--;
        }

        let diff = A.length - antiRow.length

        while(diff > 0) {
            antiRow.push(0);
            diff--;
        }
        antiDiagonal.push(antiRow);
    }

    for(let i=1; i<A.length; i++) {
        let row = i;
        let colm = A.length-1;
        let antiRow = [];

        while(row < A.length && colm >=0) {
            antiRow.push(A[row][colm]);
            row++; colm--;
        }

        let diff = A.length - antiRow.length

        while(diff > 0) {
            antiRow.push(0);
            diff--;
        }
        antiDiagonal.push(antiRow);
    }
    return antiDiagonal;
}

const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(getAntiDiagonal(A))