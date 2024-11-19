/*
Given an integer array A, find if an integer p exists in the array 
such that the number of integers greater than p in the array equals p.

input:
A = [3, 2, 1, 3]

output:
1

TC: O(NlogN)

SC: O(1)
*/

const countNobel = (A) => {
    let cnt = 0;
    A.sort((a,b) => {
        return b-a;
    });
    for(let i=0; i<A.length; i++) {
        if(A[i] !== A[i-1]) {
            if(i === A[i]) cnt++;
        }
    }
    return cnt===0 ? -1 : cnt;
}

const A = [3, 2, 1, 3];
console.log(countNobel(A));