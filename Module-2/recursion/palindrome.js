/*
Write a recursive function that checks whether string A is a palindrome or Not.
Return 1 if the string A is a palindrome, else return 0.

Note: A palindrome is a string that's the same when read forward and backward.

Input:
A = "naman"

Output:
1

TC: O(N)

SC: O(N)
*/

const isPalin = (A, s=0, e=A.length-1) => {
    if(s >= e) return 1;
    if(A[s] === A[e]) {
        return isPalin(A, ++s, --e);
    }
    return 0;
}

const A = "naman";
console.log(isPalin(A))