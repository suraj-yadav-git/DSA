/*
You are given a function to_lower() which takes a character array A as an argument.
Convert each character of A into lowercase characters if it exists. If the lowercase of a character does not exist, it remains unmodified.
The uppercase letters from A to Z are converted to lowercase letters from a to z respectively.
Return the lowercase version of the given character array.

input:
A = ['S', 'c', 'A', 'l', 'e', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y'];

output:
['s', 'c', 'a', 'l', 'e', 'r', 'a', 'c', 'a', 'd', 'e', 'm', 'y']

TC: O(N)

SC: O(1)
*/

const to_lower = (A) => {
    let i=0;
    while(i < A.length) {
        if(A[i].charCodeAt(0) >= 65 && A[i].charCodeAt(0) < 91) {
            A[i] = String.fromCharCode(A[i].charCodeAt(0) + 32);
        }
        i++;
    }
    return A;
}

const A = ['S', 'c', 'A', 'l', 'e', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y'];

console.log(to_lower(A));