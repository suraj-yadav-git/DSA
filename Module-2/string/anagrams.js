/*
You are given two lowercase strings A and B each of length N. Return 1 if they are anagrams to each other and 0 if not.
Note : Two strings A and B are called anagrams to each other if A can be formed after rearranging the letters of B.

input:
A = "secure"
B = "rescue"

output:
1

TC: O(N)

SC: O(1) [Since used array/object can not be more than 26]
*/

const isAnagrams = (A, B) => {
    if(A.length !== B.length) return 0;
    let aCharCntMap = charCounts(A);
    let bCharCntMap = charCounts(B);

    for(let i=0; i<A.length; i++) {
        if(aCharCntMap[A[i]] !== bCharCntMap[A[i]]) {
            return 0;
        }
    }
    return 1;
}

const charCounts = (arrChar) => {
    let cntMap = {};
    for(let i=0; i<arrChar.length; i++) {
        if(cntMap[arrChar[i]]) cntMap[arrChar[i]]++;
        else cntMap[arrChar[i]] = 1;
    }
    return cntMap;
}

const A = "secure";
const B = "rescue";

console.log(isAnagrams(A, B));