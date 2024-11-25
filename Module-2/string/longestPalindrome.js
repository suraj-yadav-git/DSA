/*
Given a string A of size N, find and return the longest palindromic substring in A.
Substring of string A is A[i...j] where 0 <= i <= j < len(A)

Palindrome string:
A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.
Incase of conflict, return the substring which occurs first ( with the least starting index).

input:
A = "aaaabaaa"

output:
"aaabaaa"

TC: O(N^2)

SC: O(1)
*/

const longestPalindrome = (A) => {
    let ans='';
    //for odd length
    for(let i=0; i<A.length; i++) {
        let p1 = i;
        let p2 = i;
        let newAns = expand(A, p1, p2);
        if(ans.length < newAns.length) {
            ans = newAns;
        }
    }
    //for even length
    for(let i=0; i<A.length-1; i++) {
        let p1 = i;
        let p2 = i+1;
        let newAns = expand(A, p1, p2);
        if(ans.length < newAns.length) {
            ans = newAns;
        }
    }
    return ans;
}

const expand = (A, p1, p2) => {
    let result = '';
    while(p1 >= 0 && p2 < A.length && A[p1] === A[p2]) {
        if(result.length === 0) {
            result = (p1 === p2) ? A[p1] : A[p1]+A[p2];
        } else {
            result = A[p1]+result+A[p2];
        }
        p1--;
        p2++;
    }
    return result;
}

const A = "aaaabaaa";
console.log(longestPalindrome(A));