/*
You are given a string S, and you have to find all the amazing substrings of S.
An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

input:
ABEC

output:
6

TC:

SC:
*/

const cntSubarray = (A) => {
    let cnt=0;
    let n=A.length;
    for(let i=0; i<n; i++) {
        if(['A','E','I','O','U','a','e','i','o','u'].includes(A[i])) {
            cnt += (n - i);
        }
    }
    return cnt;
}

const A = 'ABEC';
console.log(cntSubarray(A));