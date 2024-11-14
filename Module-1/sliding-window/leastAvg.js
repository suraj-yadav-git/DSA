/*
Given an array A of size N, find the subarray of size B with the least average.
Return the index of the first element of the subarray of size B that has least average.
Array indexing starts from 0.

input:
A = [3, 7, 90, 20, 10, 50, 40]
B = 3

output:
3

TC: O(N)

SC: O(1)
*/

const leastAvg = (A, B) => {
    let sum = 0;
    for(let i=0; i<B; i++) {
        sum += A[i];
    }

    let avg = sum / B;
    let s=1;
    let e=B;
    let ans = 0
    while(e < A.length) {
        sum = sum - A[s-1] + A[e];
        if(sum / B < avg) {
            ans = s;
            avg = sum / B;
        }
        s++;
        e++;
    }
    return ans;
}

const A = [3, 7, 90, 20, 10, 50, 40];
const B = 3;

console.log(leastAvg(A, B));