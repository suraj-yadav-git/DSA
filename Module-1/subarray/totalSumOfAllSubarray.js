/*
You are given an integer array A of length N.
You have to find the sum of all subarray sums of A.
More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
A subarray sum denotes the sum of all the elements of that subarray.

input:
A = [1, 2, 3]

output:
20

TC:O(N)

SC:O(1)
*/

const totalSumOfSubarray = (A) => {
    let totalSum = 0;
    for(let i=0; i<A.length; i++) {
        totalSum += (A.length-i)*(i+1)*A[i];
    }
    return totalSum;
}

const A = [1, 2, 3];
console.log(totalSumOfSubarray(A));

/*

Soluntion Explaination

Example: [3,2,4,5]

The sum of sub-arrays: 
[3] +
[3,2] +
[3,2,4] +
[3,2,4,5] +
[2] +
[2,4] +
[2,4,5] +
[4] +
[4,5] +
[5]
______________
4*(3) + 6*(2) + 6*(4) + 4*(5) = 68

Observing the pattern we derive the below formula.
Formula: For every index i : (n-i)(i+1)(A[i])
*/