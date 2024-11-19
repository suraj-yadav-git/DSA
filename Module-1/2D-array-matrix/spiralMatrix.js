/*
Given an integer A, generate a square matrix filled with elements 
from 1 to A2 in spiral order and return the generated square matrix.

input:
5

output:
[ 
  [1,   2,  3,  4, 5], 
  [16, 17, 18, 19, 6], 
  [15, 24, 25, 20, 7], 
  [14, 23, 22, 21, 8], 
  [13, 12, 11, 10, 9] 
]

TC: O(N^2)

SC: O(N^2)
*/

const spiralMatrix = (A) => {
    const M = Array(A).fill().map(() => {
        return Array(A).fill(0);
    })

    let i=0;
    let j=0;
    let cnt=1;
    let N = M.length;
    while(N > 1) {
        let s = i;
        while(j < N+s-1) {
            M[i][j] = cnt;
            cnt++;
            j++
        }

        while(i < N+s-1) {
            M[i][j] = cnt;
            cnt++;
            i++;
        }
    
        while(j > s) {
            M[i][j] = cnt;
            cnt++;
            j--;
        }
    
        while(i > s) {
            M[i][j] = cnt;
            cnt++;
            i--;
        }
        N -=2;
        i++;
        j++;

    }
    if(N === 1) M[i][j] = cnt;
    
    return M;
}

const A = 5;

console.log(spiralMatrix(A));