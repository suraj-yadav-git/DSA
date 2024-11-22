/*
You are given a function to_upper() consisting of a character array A.
Convert each character of A into Uppercase character if it exists. If the Uppercase of a character does not exist, it remains unmodified.
The lowercase letters from a to z is converted to uppercase letters from A to Z respectively.
Return the uppercase version of the given character array.

input:
A = ['S', 'c', 'A', 'L', 'E', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']

output:
['S', 'C', 'A', 'L', 'E', 'R', 'A', 'C', 'A', 'D', 'E', 'M', 'Y']

TC: O(N)

SC: O(1)
*/

const to_upper = (A) => {
    let i=0;
    while(i < A.length) {
        if(A[i].charCodeAt(0) >= 97 && A[i].charCodeAt(0) < 123) {
            A[i] = String.fromCharCode(A[i].charCodeAt(0) - 32);
        }
        i++;
    }
    return A;
}

const A = ['S', 'c', 'A', 'L', 'E', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y'];

console.log(to_upper(A));