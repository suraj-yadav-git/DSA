/*
Given two integer arrays, A and B of size N and M, respectively. Your task is to find all the common elements in both the array.

NOTE:
Each element in the result should appear as many times as it appears in both arrays.
The result can be in any order.

input:
A = [1, 2, 2, 1]
B = [2, 3, 1, 2]

output:
[ 1, 2, 2 ]

TC: O(N)

SC: O(N)
*/

const commonElement = (A, B) => {
    let bFreq = freqEle(B);
    let ans = [];
    for(let val of A) {
        if(bFreq[val] > 0) {
            ans.push(val);
            bFreq[val]--;
        }
    }
    return ans;
}

const freqEle = (A) => {
    let freq = {};
    for(let i=0; i< A.length; i++) {
        if(freq[A[i]]) freq[A[i]]++;
        else freq[A[i]]=1;
    }
    return freq;
}

const A = [1, 2, 2, 1]
const B = [2, 3, 1, 2]

console.log(commonElement(A, B));