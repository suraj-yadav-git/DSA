/*
You are given an integer A, print 1 to A using using recursion.
Note :- After printing all the numbers from 1 to A.

Input:
A = 10

Output:
1 2 3 4 5 6 7 8 9 10 

TC: O(N)

SC: O(N)
*/

const printA = (A) => {
    if(A === 0) return;
    printA(A-1);
    process.stdout.write(`${A} `);
}

const A = 10;
printA(A);