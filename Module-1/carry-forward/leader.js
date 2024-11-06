/*
Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.
NOTE: The rightmost element is always a leader.

input:
A = [16, 17, 4, 3, 5, 2]

output:
[17, 2, 5]

TC:O(N)

SC:O(1)
*/

const getLeaders = (A) => {
    let max = A[A.length-1];
    let lead = [max];
    for(let i=A.length-2; i>=0; i--) {
        if(A[i] > max) {
            max = A[i];
            lead.push(A[i]);
        }
    }
    return lead;
}

A = [16, 17, 4, 3, 5, 2];
console.log(getLeaders(A));