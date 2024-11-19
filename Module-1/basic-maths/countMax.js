/*
Given an array A of N integers. 
Count the number of elements that have at least 1 elements greater than itself.

input:
A = [3, 1, 2, 5, 4, 5]

output:
4

TC: O(N)

SC: O(1)
*/

const countMax = (A) => {
    let max = 0;
    let maxCnt = 0;
    for(let i=0; i<A.length; i++) {
        if(max < A[i]) {
            max = A[i];
            maxCnt = 1;
        } else if(max === A[i]) {
            maxCnt++;
        }
    }
    return A.length - maxCnt;
}

const A = [3, 1, 2, 5, 4, 5];
console.log(countMax(A));