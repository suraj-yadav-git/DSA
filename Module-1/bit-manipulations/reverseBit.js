/*
Reverse the bits of an 32 bit unsigned integer A.

input:
3

output:
3221225472

TC: O(1)

SC: O(1)
*/

const reverseBit = (A) => {
    let ans = 0;
    let i = 0;
    while(i < 32) {
        let bit = (A & 1)
        let rev_bit = (bit << (31-i));
        ans = ans | rev_bit;
        A =  A >> 1;
        i++;
    }
    return ans < 0 ? (new Uint32Array([ans]))[0] : ans;
}

const A = 3;

console.log(reverseBit(A));
