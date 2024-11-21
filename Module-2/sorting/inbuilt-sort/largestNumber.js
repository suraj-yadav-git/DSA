/*
Given an array A of non-negative integers, arrange them such that they form the largest number.
Note: The result may be very large, so you need to return a string instead of an integer.

input:
A = [3, 30, 34, 5, 9]

output: 
9534330

TC: O(NlogN)

SC: O(1)
*/

const largestNumber = (A) => {
    A.sort((a,b) => {
        let as = String(a)+String(b);
        let bs = String(b)+String(a);
        return bs-as;
        
    })
    return A.join('') == 0 ? 0 : A.join('');
}

const A = [3, 30, 34, 5, 9];
console.log(largestNumber(A));