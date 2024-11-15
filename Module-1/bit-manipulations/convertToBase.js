/*
Given a decimal number A and a base B, convert it into its equivalent number in base B.

input:
A = 4
B = 2 

output:
100

TC: O(N)

SC: O(1)
*/

const convertToBase = (A, B) => {
    let ans = '';
    let bal = A;
    while(bal >= B) {
        ans = String(bal % B) + ans;
        bal = Math.floor(bal / B);
    }
    ans = String(bal) + ans;
    return ans;
}

const A = 4;
const B = 2;

console.log(convertToBase(A,B))