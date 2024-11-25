/*
Given a string A of size N, check if given string is already palindrome if not check if we can make it palindrome by changing
postision of charaters.
Return 1 if we can make the given string palindrome else return 0;

Palindrome string:
A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.

input:
A = "ammad"

output:
1

TC: O(N)

SC: O(1) [Since Max length of freqMap object is 26]
*/

const canBePalindrome = (A) => {
    //check if the given string is already palindrome
    if(isPalindrome(A)) return 1;

    //create frequency map
    let freqMap = {};
    for(let i=0; i<A.length; i++) {
        if(freqMap[A[i]]) freqMap[A[i]]++;
        else freqMap[A[i]] = 1;
    }

    //check if it can be palindrome
    let isOdd = 0;
    for(let val in freqMap) {
        if(freqMap[val] % 2 !== 0) {
            if(isOdd === 0) isOdd++;
            else return 0;
        }
    }
    return 1;
}

const isPalindrome = (A) => {
    let s = 0;
    let e = A.length-1;
    while(s < e) {
        if(A[s] !== A[e]) return 0;
        s++;
        e--;
    }
    return 1;
}

const A = "ammad";
console.log(canBePalindrome(A));