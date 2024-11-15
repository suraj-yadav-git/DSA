/*
You are given a number A. You are also given a base B. A is a number on base B.
You are required to convert the number A into its corresponding value in decimal number system.

input:
A = 1010
B = 2

output:
10

TC: O(N)

SC: O(1)
*/

const getDecimal = (A, B) => {
    let ans = 0;
    let AInt = String(A).split('');
    for(let i=0; i<AInt.length; i++) {
        ans += AInt[i] * Math.pow(B, AInt.length-1-i)
    }
    return ans;
}

const A = 1010;
const B = 2;

console.log(getDecimal(A, B));