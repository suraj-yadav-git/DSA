/*
You are given a n x n 2D matrix A representing an image.
Rotate the image by 90 degrees (clockwise).
You need to do this in place.
Note: Don't use additional array.

input:
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

output:
[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

TC: O(N^2)

SC: O(1)
*/

const rotateSqureMatrix = (A) => {
    //get transpose
    for(let i=0; i<A.length; i++){
        for(let j=i+1; j<A.length; j++) {
            [A[i][j],A[j][i]] = [A[j][i],A[i][j]];
        }
    }
    // reverse each row
    for(let row=0; row<A.length; row++) {
        let i = 0;
        let j = A[row].length-1
        while(i < j) {
            [A[row][i],A[row][j]] = [A[row][j],A[row][i]];
            i++;
            j--;
        }
    }
    //final 90 degree rotated matrix
    return A;
}

const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotateSqureMatrix(A));