/*
Akash likes playing with strings. One day he thought of applying following operations on the string in the given order:
Concatenate the string with itself.
Delete all the uppercase letters.
Replace each vowel with '#'.
You are given a string A of size N consisting of lowercase and uppercase alphabets. Return the resultant string after applying the above operations.

NOTE: 'a' , 'e' , 'i' , 'o' , 'u' are defined as vowels.

input:
A="AbcaZeoB"

output:
"bc###bc###"

TC: O(N)

Sc: O(1)
*/

const stringOps = (A) => {
    A = A+A;
    let ans = '';
    let vowels = ['a','e','i','o','u']
    for(let i=0; i<A.length; i++) {
        if(!(A[i].charCodeAt(0) >= 65 && A[i].charCodeAt(0) < 91)) {
            ans += vowels.includes(A[i]) ? '#' : A[i];
        }
    }
    return ans;
}

const A = "AbcaZeoB";
console.log(stringOps(A));