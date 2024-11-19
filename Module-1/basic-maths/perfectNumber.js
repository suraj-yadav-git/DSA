/*
You are given an integer A. You have to tell whether it is a perfect number or not.
Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
A proper divisor of a natural number is the divisor that is strictly less than the number.

input:
6

output:
1

TC: O(logN)

SC: O(1)
*/

const perfectNumber = (A) => {
    if(A === 1) return 0;
    let sum = 0;
    let i = 1;
    while(i*i <= A) {
        if(A % i === 0)
        sum += (i*i === A || i===1) ? i : (i + (A/i));
        i++;
    }
    if(sum === A) return 1;
    return 0;
}

const A = 6;
console.log(perfectNumber(A));