/*
You are given an array A of N integers and an integer B.
Count the number of pairs (i,j) such that A[i] - A[j] = B and i < j.

Input:
A = [2,1,2,1,2,1,2,1,2]
B = 1

Output:
10

TC: O(N)

SC: O(N)
*/

const countDiff = (A, B) => {
    const hashMap = new Map();
    let cnt = 0;
    for(let i=0; i<A.length; i++) {
        if(hashMap.has(B+A[i])) {
            cnt += hashMap.get(B+A[i])
        } else {
            if(hashMap.has(A[i])) hashMap.set(A[i], hashMap.get(A[i])+1);
            else hashMap.set(A[i], 1);
        }
    }
    return cnt;
}

const A = [2,1,2,1,2,1,2,1,2]
const B = 1

console.log(countDiff(A, B));