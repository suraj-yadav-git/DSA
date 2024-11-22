/*
You are given a string A of size N.
Return the string A after reversing the string word by word.

NOTE:
A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string.

input:
A = "the sky is blue"

output:
"blue is sky the"

TC: O(N)

SC: O(1)
*/

const reverseSentence = (A) => {
    A = A.split(' ');
    let s=0;
    let e=A.length-1;
    while(s<e) {
        [A[s],A[e]] = [A[e],A[s]];
        s++;
        e--;
    }
    return A.join(' ');
}

const A = "the sky is blue";
console.log(reverseSentence(A));