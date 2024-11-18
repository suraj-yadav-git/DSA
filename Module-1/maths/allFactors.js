/*
Given an integer A, you need to find the count of it's factors.
Factor of a number is the number which divides it perfectly leaving no remainder.
Example : 1, 2, 3, 6 are factors of 6

input:
10

output:
4

TC: O(logN)

SC: O(1)
*/

const allFactors = (A) => {
    let i=1;
    let cnt=0;
    while(i*i < A) {
        if(A % i === 0) cnt +=2;
        i++;
    }
    if(i*i === A) cnt++;
    return cnt;
}

const A = 10;
console.log(allFactors(A));