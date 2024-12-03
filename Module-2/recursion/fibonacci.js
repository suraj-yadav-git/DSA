/*
The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation:
Fn = Fn-1 + Fn-2

Given a number A, find and return the Ath Fibonacci Number using recursion.
Given that F0 = 0 and F1 = 1.

Input:
A = 9

Output:
34

TC: O(N)

SC: O(N)
*/

const fibonacci = (N) => {
    if(N === 0 || N === 1) return N;
    return fibonacci(N-1) + fibonacci(N-2);
}

const A = 9;
console.log(fibonacci(A));