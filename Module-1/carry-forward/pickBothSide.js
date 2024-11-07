/*
You are given an integer array A of size N.
You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
Find and return the maximum possible sum of the B elements that were removed after the B operations.

NOTE: Suppose B = 3, and array A contains 10 elements, then you can:

Remove 3 elements from front and 0 elements from the back, OR
Remove 2 elements from front and 1 element from the back, OR
Remove 1 element from front and 2 elements from the back, OR
Remove 0 elements from front and 3 elements from the back.

input:
A = [5, -2, 3 , 1, 2]
B = 3

output:
8

TC:O(N)

SC:O(1)
*/

const pickBothMaxSum = (A, B) => {
    let leftSum = 0;
    let rightSum = 0;
    let maxSum = 0;

    for(let i=A.length-1; i>=A.length-B; i--) {
        rightSum += A[i];
    }
    for(let i=0; i<B; i++) {
        leftSum += A[i];
        rightSum -= A[A.length-B+i];
        maxSum = (maxSum < (leftSum + rightSum)) ? (leftSum + rightSum) : maxSum
    }

    return maxSum;
}

A = [5, -2, 3 , 1, 2];
B = 3;

console.log(pickBothMaxSum(A,B));