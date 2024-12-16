/*
Given an one-dimensional unsorted array A containing N integers.
You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.
Return 1 if any such pair exists else return 0.

Input:
 A = [5, 10, 3, 2, 50, 80]
 B = 78

Output:
1

TC: O(N)

SC: O(N)
*/

const existDiff = (A, B) => {
    const hashMap = new Map();
    for(let i=0; i<A.length; i++) {
        if(hashMap.has(A[i] - B) || hashMap.has(B + A[i])) {
            return 1
        } else {
            hashMap.set(A[i], true);
        }
    }
    return 0;
}

const A = [5, 10, 3, 2, 50, 80]
const B = 78

console.log(existDiff(A, B));