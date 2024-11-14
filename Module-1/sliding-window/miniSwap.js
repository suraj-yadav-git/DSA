/*
Given an array of integers A and an integer B, find and return the minimum number of swaps required to bring all the numbers less than or equal to B together.
Note: It is possible to swap any two elements, not necessarily consecutive.

input:
A = [1, 12, 10, 3, 14, 10, 5]
B = 8

output:
2

TC: O(N)

SC: O(1)
*/

const miniSwapRequired = (A, B) => {
    let swap = 0;
    let subLength = 0
    for(let i=0; i<A.length; i++) {
        if(A[i] <= B) subLength++;
    }
    if(subLength === 0 || subLength === 1) return 0;

    for(let i=0; i<subLength; i++) {
        if(A[i] > B) swap++
    }

    let ans = swap;
    let s = 1;
    let e = subLength;

    while(e < A.length) {
        if(A[s-1] > B) swap--;
        if(A[e] > B) swap++;
        ans = Math.min(ans, swap);
        s++;
        e++;
    }

    return ans;
}

const A = [1, 12, 10, 3, 14, 10, 5];
const B = 8;

console.log(miniSwapRequired(A,B));
