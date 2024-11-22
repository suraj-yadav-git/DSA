/*
You are given a character string A having length N, consisting of only lowercase and uppercase latin letters.
You have to toggle case of each character of string A. For e.g 'A' is changed to 'a', 'e' is changed to 'E', etc.

input:
A = "tHiSiSaStRiNg" 

output:
ThIsIsAsTrInG 

TC: O(N)

SC: O(1)
*/

const toggleChar = (A) => {
    let i=0;
    let result = '';
    while(i < A.length) {
        if(A.charCodeAt(i) >= 97 && A.charCodeAt(i) < 123) {
            result += String.fromCharCode(A.charCodeAt(i) - 32);
        } else if(A.charCodeAt(i) >= 65 && A.charCodeAt(i) < 91) {
            result += String.fromCharCode(A.charCodeAt(i) + 32);
        }
        i++;
    }
    return result;
}

const A = "tHiSiSaStRiNg" ;

console.log(toggleChar(A));