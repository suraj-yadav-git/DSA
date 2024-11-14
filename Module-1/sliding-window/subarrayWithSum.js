/*
Given an array A of length N. Also given are integers B and C.
Return 1 if there exists a subarray with length B having sum C and 0 otherwise

input:
A = [4, 3, 2, 6, 1]
B = 3
C = 11

output:
1

TC: O(N)

SC: O(1)
*/

const checkSubarrayWithSum = (A, B, C) => {
    let sum = 0;
    for(let i=0; i<B; i++) {
        sum += A[i];
    }
    if(sum === C) return 1;

    let s=1;
    let e=B;
    while(e < A.length) {
        sum = sum - A[s-1] + A[B];
        if(sum === C) return 1;
        s++;
        e++;
    }
    return 0;
}

const A = [4, 3, 2, 6, 1];
const B = 3;
const C = 11;

console.log(checkSubarrayWithSum(A,B,C));