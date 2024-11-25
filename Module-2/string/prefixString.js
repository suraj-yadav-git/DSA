/*
Given the array of strings A, you need to find the longest string S, which is the prefix of ALL the strings in the array.
The longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.
Example: the longest common prefix of "abcdefgh" and "abcefgh" is "abc".

input:
A = ["abab", "ab", "abcd"];

output:
"ab"

TC: O(N^2)

SC: O(1)
*/

const prefixStr = (A) => {
    let ans='';
    for(let i=0; i<A[0].length; i++) {
        let isMatch = 1;
        for(let j=1; j<A.length; j++) {
            if(A[0][i] !== A[j][i]) {
                isMatch = 0;
                break; 
            }
        }
        if(isMatch) ans += A[0][i];
        else break;
    }
    return ans;
}

const A = ["abab", "ab", "abcd"];
console.log(prefixStr(A));