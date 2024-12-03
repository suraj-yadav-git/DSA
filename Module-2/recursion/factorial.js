/*
Write a program to find the factorial of the given number A using recursion.
Note: The factorial of a number N is defined as the product of the numbers from 1 to N.

Input:
A = 4

Output:
24

TC: O(N)

SC: O(N)
*/

const factorial = (N) => {
    if(N === 1) return 1;
    return N * factorial(N-1);
}

const A = 4;
console.log(factorial(A));
