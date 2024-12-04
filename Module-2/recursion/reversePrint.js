/*
Write a recursive function that takes a string, S, as input and prints the characters of S in reverse order.

Input:
scaleracademy

Output: 
ymedacarelacs

TC: O(N)

SC: O(N)
*/

const printReverse = (A) => {
    if(A.length === 0) return;
    process.stdout.write(`${A[A.length-1]}`);
    printReverse(A.slice(0, -1));
}

const A = 'scaleracademy';
printReverse(A);