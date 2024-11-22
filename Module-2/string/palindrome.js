/*
Given a string A, you are asked to check if the given string is palindrome.
return 1 if string is plindrome else return 0.

input:
A = "madam"

output:
1

TC: O(N)

SC: O(1)
*/

const isPalindrome = (A) => {
    let s =0;
    let e =A.length-1;
    while(s < e) {
        if(A[s] !== A[e]) return 0;
        s++;
        e--;
    }
    return 1;
}

const A="madam";
console.log(isPalindrome(A));