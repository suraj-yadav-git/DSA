/*
You have given a string A having Uppercase English letters.
You have to find how many times subsequence "AG" is there in the given string.

input:
A = "ABCGAG"

output:
3

TC: O(N)

SC: O(1)
*/

const cntSubsequence = (A) => {
    let cnt =0;
    let ans = 0;
    for(let i=A.length-1; i>=0; i--) {
        if(A[i] === 'G') {
            cnt++;
        } else if(A[i] === 'A') {
            ans = ans + cnt;
        }
    }
    return ans;
}

console.log(cntSubsequence('ABCGAG'));