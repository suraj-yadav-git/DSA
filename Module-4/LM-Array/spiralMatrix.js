/*
you are given a matrix of n x n elements (m rows, n columns), 
Print all elements of the matrix in spiral order in O(m*n) Time Complexity and O(1) Space Complexity

logic:
1- length of mnatrix reducing by 2 after each spiral
2- four while loops for four directions
3- each while loop runs till N+S-2 because we have to print N elements in each direction and starting index is S
4- after each spiral increment starting point i and j by 1
*/

const spiralMat = (mat) => {
    let i=0;
    let j=0;
    
    let N = mat[0].length;

    while(N > 1) {
        let S = i;
        while(j <= N+S-2) {
            console.log(mat[i][j]);
            j++;
        }
        while(i <= N+S-2) {
            console.log(mat[i][j]);
            i++;
        }
        while(j > S) {
            console.log(mat[i][j]);
            j--;
        }
        while(i > S) {
            console.log(mat[i][j]);
            i--;
        }
        N -=2;
        i++;
        j++;
    }
    if(N === 1) { console.log(mat[i][j]); }
}

const Mat = [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9]
];

spiralMat(Mat);