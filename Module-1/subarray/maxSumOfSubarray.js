/*
You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.

input:
A = 5
B = 12
C = [2, 1, 3, 4, 5]


output:
12

TC: O(N^2)
SC: O(1)
*/

const maxSumOfSubarray = (A, B, C) => {
    let maxSum = 0;
    for(let i=0; i<A; i++) {
        let sum = 0;
        for(let j=i; j<A; j++) {
            if(sum + C[j] > B) {
                break;
            } else {
                sum += C[j];
                if(maxSum < sum) maxSum = sum;
            }
        }
    }
    return maxSum;
}

const A = 5;
const B = 12;
const C = [2, 1, 3, 4, 5];

console.log(maxSumOfSubarray(A,B,C));
