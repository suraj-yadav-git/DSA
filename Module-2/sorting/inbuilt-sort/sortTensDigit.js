/*
Given an array A of N integers. Sort the array in increasing order of the value at the tens place digit of every number.
If a number has no tens digit, we can assume value to be 0.
If 2 numbers have same tens digit, in that case number with max value will come first
Solution should be based on comparator.

input:
A = [15, 11, 7, 19]

output:
[7, 19, 15, 11]

TC: O(NlogN)

SC: O(1)
*/

const sortTestDigit = (A) => {
    A.sort((a,b) => {
        const atens = Math.floor((a/10)%10);
        const btens = Math.floor((b/10)%10);
        if(atens === btens) {
            return b-a;
        } else {
            return atens - btens;
        }
    });
    return A;
}

const A = [36,63,63,26,87,28,77,93,7];
console.log(sortTestDigit(A));