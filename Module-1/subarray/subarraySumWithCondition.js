/*
Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
Your task is to find the count of good subarrays in A.

input:
A = [1, 2, 3, 4, 5]
B = 4

output:
6

TC:O(N^2)

SC:O(1)
*/

const countConditionalSum = (A, B) => {
    let cnt = 0;
    for(let i=0; i<A.length; i++) {
        let sum=0;
        for(let j=i; j<A.length; j++) {
            sum += A[j]
            if((j-i+1) % 2 === 0) {
                if(sum < B) cnt++;
            } else {
                if(sum > B) cnt++;
            }
        }
    }
    return cnt;
}

A = [1, 2, 3, 4, 5];
B = 4;

console.log(countConditionalSum(A,B));