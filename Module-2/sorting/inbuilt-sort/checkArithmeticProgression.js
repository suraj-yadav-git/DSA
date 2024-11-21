/*
Given an integer array A of size N. Return 1 if the array can be arranged to form an arithmetic progression, otherwise return 0.
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

input:
A = [3, 5, 1]

output:
1

TC: O(NlogN)

SC: O(1)
*/

const checkArthPrg = (A) => {
    A.sort((a,b) => {
        return b-a;
    })
    let dif = A[0]-A[1];
    for(let i=2; i<A.length; i++) {
        if(A[i-1] - A[i] !== dif) return 0;
    }
    return 1;
}

const A = [3, 5, 1];
console.log(checkArthPrg(A));