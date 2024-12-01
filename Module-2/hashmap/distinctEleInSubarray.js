/*
You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.
Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.
NOTE: if B > N, return an empty array.

input:
A = [1, 2, 1, 3, 4, 3]
B = 3

output:
[2, 3, 3, 2]

TC: O(N)

SC: O(N)
*/

const distinctEleSubarray = (A, B) => {
    let result = [];
    let hashMap = {};
    for(let i=0; i<B; i++) {
        if(hashMap[A[i]]) {
            hashMap[A[i]]++;
        } else {
            hashMap[A[i]] = 1;
        }
    }
    result.push(Object.keys(hashMap).length);
    let s = 1;
    let e = B;
    while(e < A.length) {
        if(hashMap[A[s-1]] > 1) {
            hashMap[A[s-1]]--;
        } else {
            delete hashMap[A[s-1]];
        }
        if(hashMap[A[e]]) {
            hashMap[A[e]]++;
        } else {
            hashMap[A[e]] = 1;
        }

        result.push(Object.keys(hashMap).length);
        s++;
        e++;
    }

    return result;
}

const A = [1, 2, 1, 3, 4, 3]
const B = 3

console.log(distinctEleSubarray(A, B));