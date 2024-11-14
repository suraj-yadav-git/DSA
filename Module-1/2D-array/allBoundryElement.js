/*
Give a N * M matrix A, return an array of its all boundry element in clock-wise. 
Look at the example for more details.

input:
1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 16

output:
[1,2,3,4,8,12,16,15,14,13,9,5]

TC:O(N)

SC:O(N)
*/

const allBoundryElement = (A) => {
    let boundryElement = [];

    let i=0;
    let j=0;
    while(j < A[i].length-1) {
        boundryElement.push(A[i][j]);
        j++;
    }

    while(i < A.length-1) {
        boundryElement.push(A[i][j]);
        i++;
    }

    while(j > 0) {
        boundryElement.push(A[i][j]);
        j--;
    }

    while(i > 0) {
        boundryElement.push(A[i][j]);
        i--;
    }

    return boundryElement;
}

const A = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

console.log(allBoundryElement(A));