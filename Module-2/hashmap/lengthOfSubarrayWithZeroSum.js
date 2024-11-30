/*
Given an array A of N integers.
Find the length of the longest subarray in the array which sums to zero.
If there is no subarray which sums to zero then return 0.

input:
A = [1, -2, 1, 2]

output:
3

TC: O(N)

SC: O(N)
*/

const longestSubarray = (A) => {
    let hashObj = new Map();
    let sum = 0;
    let maxCnt = 0;
    hashObj.set(0, -1);

    for(let i=0; i<A.length; i++) {
        sum += A[i];
        if(hashObj.has(sum)) {
            maxCnt = Math.max(maxCnt, i-hashObj.get(sum));  
        } else {
            hashObj.set(sum, i);
        }
    }
    return maxCnt;
}

const A = [-16,16,3];

console.log(longestSubarray(A));