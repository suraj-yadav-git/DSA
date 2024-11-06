/*
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array
and at least one occurrence of the minimum value of the array.

input:
A = [1, 3, 2]

output:
2

TC:O(N^2)

SC:O(1)
*/

//find min max

const getMinMax = (A) => {
    let min = A[0];
    let max = A[0];
    for(let i=1; i<A.length; i++) {
        if(A[i] < min) min = A[i];
        if(A[i] > max) max = A[i];
    }
    return { min, max }
}

const getSubArr = (A) => {
    const minMax = getMinMax(A);
    let ans = A.length;
    for(let i=0; i<A.length; i++) {
        if(A[i] === minMax.min) {
            for(let j=i+1; j<A.length; j++) {
                if(A[j] === minMax.max) {
                    ans  = Math.min(ans, ((j - i) + 1));
                    break;
                }
            }
        } else if(A[i] === minMax.max) {
            for(let j=i+1; j<A.length; j++) {
                if(A[j] === minMax.min) {
                    ans  = Math.min(ans, ((j - i) + 1));
                    break;
                }
            }
        }
    }
    return ans;
}

A = [1, 3, 2];

console.log(getSubArr(A));