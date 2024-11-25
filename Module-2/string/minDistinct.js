/*
You are given a string A of size N consisting of lowercase alphabets.
You can change at most B characters in the given string to any other lowercase alphabet such that the number of distinct characters in the string is minimized.
Find the minimum number of distinct characters in the resulting string.

input:
A = "abcabbccd"
B = 3

output:
2

TC: O(N)

SC: O(1) [Since length of used array/object length can not be more than 26]
*/

const minDistinct = (A, B) => {
    //char with their count map
    let cntChar = {};
    for(let i=0; i<A.length; i++) {
        if(cntChar[A[i]]) cntChar[A[i]]++;
        else cntChar[A[i]]=1;
    }
    // distinct sorted chars 
    // Note: cntChar length can not be more than 26 hence TC is constant here
    cntCharKeys = Object.keys(cntChar).sort(function(a,b){return cntChar[b]-cntChar[a]})
    
    // replace min cnt char with max cnt char
    let chance = B;
    let minIdx = cntCharKeys.length-1;
    while(chance > 0 && minIdx > 0) {
        let minChar = cntCharKeys[minIdx];
        if(cntChar[minChar] > 0) cntChar[minChar]--;
        if(cntChar[minChar] == 0) {
            cntCharKeys[minIdx] = 0;
            minIdx--;
        }
        chance--;
    }

    // filter non zero chars
    cntCharKeys = cntCharKeys.filter((item) => {
        return item!==0
    })

    return cntCharKeys.length;
}

const A = "abcabbccd";
const B = 3;
console.log(minDistinct(A,B));