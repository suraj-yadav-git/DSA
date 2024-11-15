/*
Given an array B of length A with elements 1 or 0. 
Find the number of subarrays such that the bitwise OR of all the elements present in the subarray is 1.
Note : The answer can be large. So, return type must be long.

input:
A = 5
B = [0,1,1,0,1]

output:
13

TC: O(N^2)

SC: O(1)
*/

const subarrayOr = (A, B) => {
    let cnt = 0;
    for(let i=0; i<A; i++) {
        let ans = Number(B[i]);
        if(B[i] === 1) cnt++;
        for(let j=i+1; j<A && i<A-1; j++) {
            ans |= Number(B[j]);
            if(ans === 1) cnt++
        }
    }
    return cnt;
}

const A = 5;
const B = [0,1,1,0,1];

console.log(subarrayOr(A,B));