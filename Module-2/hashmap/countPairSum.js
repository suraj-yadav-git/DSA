/*
You are given an array A of N integers and an integer B. Count the number of pairs (i,j) such that A[i] + A[j] = B and i ≠ j.
Note - The pair (i,j) is same as the pair (j,i) and we need to count it only once.

Input:
A = [1, 2, 1, 2]
B = 3

Output:
4

TC: O(N)

SC: O(N)
*/

const countPairSum = (A, B) => {
    const hashMap = new Map();
    let cnt = 0;
    for(let i=0; i<A.length; i++) {
        if(hashMap.has(B-A[i])) {
            cnt += hashMap.get(B-A[i]);
        }
        if(hashMap.has(A[i])) hashMap.set(A[i], hashMap.get(A[i])+1);
        else hashMap.set(A[i], 1);
    }
    return cnt;
}

const A = [9,18,17,17,6,16,13,11,15,7]
const B = 15

console.log(countPairSum(A,B));