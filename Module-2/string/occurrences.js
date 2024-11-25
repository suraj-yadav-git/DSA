/*
Find the number of occurrences of bob in string A consisting of lowercase English alphabets.

input:
"cghbobobjsboboi"

output:
3

TC: O(N)

SC: O(1)
*/

const cntStr = (A, B) => {
    let bidx = 0;
    let cnt = 0;
    for(let i=0; i<A.length; i++) {
        if(A[i] === B[bidx]) {
            bidx++;
        } else {
            if(A[i] === B[0]) i--;
            bidx=0;
        }
        if(bidx === B.length) {
            cnt++;
            i--;
            bidx = 0;
        }
    }
    return cnt;
}

const A =  "cghbobobjsboboi";
const B = "bob";
console.log(cntStr(A,B));