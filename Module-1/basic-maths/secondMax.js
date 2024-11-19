/*
You are given an integer array A. 
You have to find the second largest element/value in the array or report that no such element exists.

input:
A = [2, 1, 6, 8, 5] 

output:
6

TC: O(N)

SC: O(1)
*/

const secondMax = (A) => {
    let prev = -1;
    let max = A[0];
    for(let i=1; i<A.length; i++) {
        if(max < A[i]) {
            prev = max;
            max = A[i];
        } else if(max === A[i]) {
            continue;
        } else if(prev < A[i]) {
            prev = A[i];
        }
    }
    return prev;
}

const A = [2, 1, 6, 8, 5];

console.log(secondMax(A));