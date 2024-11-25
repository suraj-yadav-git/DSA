/*
Given two binary strings A and B. Return their sum (also a binary string).

input:
A = "100"
B = "11"

output:
"111"

TC: O(N)

SC: O(1)
*/

const addBinaryStr = (A, B) => {
    let ans = '';
    if(A.length !== B.length) {
        let maxlen = Math.max(A.length, B.length);
        A = A.padStart(maxlen, '0');
        B = B.padStart(maxlen, '0');
    }
    let c=0;
    for(let i=A.length-1; i>=0; i--) {
        let sumAll = Number(A[i]) + Number(B[i]) + c;
        if((Number(sumAll) === 2)) {
            c = 1;
            ans = '0'+ans;
        } else if((sumAll) === 3) {
            c = 1;
            ans = '1'+ans;
        } else {
            c = 0;
            ans = (sumAll) + ans;
        }
    }
    if(c === 1) ans = '1'+ans;

    return ans;
}

A = "100"
B = "11"

console.log(addBinaryStr(A,B));