/*
Given a string A, you are asked to reverse the string and return the reversed string.

input:
A = "academy"

output:
"ymedaca"

TC: O(N)

SC: O(1)
*/

const reverseString = (A) => {
    A = A.split('');
    let s = 0;
    let e = A.length;
    while(s < e) {
        [A[s],A[e]] = [A[e],A[s]];
        s++;
        e--;
    }
    return A.join('');
}

const A = "academy";
console.log(reverseString(A));