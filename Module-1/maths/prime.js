/*
Given a number A. Return 1 if A is prime and return 0 if not. 
Note : 
The value of A can cross the range of Integer.

input:
5

output:
1

TC: O(logN)

SC: O(1)
*/

const isPrime = (A) => {
    if(A === 1) return 0;
    let i=2;
    while(i*i <= A) {
        if(A % i === 0) return 0;
        i++;
    }
    return 1;
}

const A = 13;
console.log(isPrime(A));