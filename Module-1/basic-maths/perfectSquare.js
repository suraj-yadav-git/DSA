/*
Given a number A. Return square root of the number if it is perfect square otherwise return -1.
Note: A number is a perfect square if its square root is an integer.

input:
1001

output:
-1

TC: O(logN)

SC: O(1)
*/

const perfectSqr = (A) => {
    let i = 1;
    while(i*i <= A) {
        if(i*i === A) return i;
        i++;
    }
    return -1;
}

const A = 625;
console.log(perfectSqr(A));