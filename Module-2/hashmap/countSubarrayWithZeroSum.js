/*
Given an array A of N integers.
Find the count of the subarrays in the array which sums to zero.

input:
[1, -1, -2, 2]

output:
3

TC: O(N)

SC: O(N)
*/

const countSubarrayWithZeroSum = (A) => {
    let cnt = 0;
    const hashMap = new Map;
    for(let i=1; i<A.length; i++) {
        A[i] = A[i-1] + A[i];
    }
    hashMap.set(0,0);
    for(let i=0; i<A.length; i++) {
        if (hashMap.has(A[i])) {
            hashMap.set(A[i],hashMap.get(A[i])+1);
            cnt += hashMap.get(A[i]);
        } else {
            hashMap.set(A[i],0);
        }
    }
    return cnt;
}

const A = [1, -1, -2, 2];
console.log(countSubarrayWithZeroSum(A));

