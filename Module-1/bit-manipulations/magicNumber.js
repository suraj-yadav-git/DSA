/*
Given an integer A, find and return the Ath magic number.
A magic number is defined as a number that can be expressed as a power of 5 or a sum of unique powers of 5.
First few magic numbers are 5, 25, 30(5 + 25), 125, 130(125 + 5), ….

input:
A = 10

output:
650

TC: O(1)

SC: O(1)
*/

const magicNumber = (A) => {
    let i = 0;
    let ans = 0;
    while(i < 32) {
        if((A & (1<<i)) === (1<<i)) ans += Math.pow(5, i+1);
        i++;
    }
    return ans;
}

const A = 10;
console.log(magicNumber(A));