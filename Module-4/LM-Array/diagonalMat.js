/*
Given a matrix of M x N elements (M rows, N columns), 
Print all elements of the matrix in diagonal order in Time Complexity O(m*n) and Space Complexity O(1)
*/

const diagonalMat = (mat) => {
    const m = mat.length;
    const n = mat[0].length;
    let r = 0, c = 0;
    while(c < n) {
        let i = r, j = c;
        while(i < m && j >= 0) {
            console.log(mat[i][j]);
            i++;
            j--;
        }
        if(c < n - 1) {
            c++;
        } else {
            r++;
        }
    }
    while(r < m) {
        let i = r, j = c - 1;
        while(i < m && j >= 0) {
            console.log(mat[i][j]);
            i++;
            j--;
        }
        r++;
    }
}

const Mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

diagonalMat(Mat);