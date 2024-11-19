/*
You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, 
make entire ith row and jth column zero.

input:
[1,2,3,4]
[5,6,7,0]
[9,2,0,4]

output:
[1,2,0,0]
[0,0,0,0]
[0,0,0,0]

TC: O(N^2)

SC: O(N)
*/

const makeRowAndColmZero = (A) => {
    let ithZeroIdx = [];
    let jthZeroIdx = [];

    for(let i=0; i<A.length; i++) {
        for(let j=0; j<A[i].length; j++) {
            if(A[i][j] === 0) {
                ithZeroIdx.push(i);
                jthZeroIdx.push(j);
            }
        }
    }

    for(let i=0; i<A.length; i++) {
        for(let j=0; j<A[i].length; j++) {
            if(ithZeroIdx.includes(i) || jthZeroIdx.includes(j)) {
                A[i][j] = 0;
            }
        }
    }

    return A;
}

const A = [
    [1,2,3,4],
    [5,6,7,0],
    [9,2,0,4]
];

console.log(makeRowAndColmZero(A));