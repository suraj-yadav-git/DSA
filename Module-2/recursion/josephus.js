/*
Given the total number of person A and a number B which indicates that B-1 persons are skipped and the Bth person is killed in a circle. 
Find the last person standing in the circle. As an example, for A = 12, and B = 2,

Input:
A = 5
B = 2

Output:
3

TC: O(N)

SC: O(N)
*/

const josephusProb = (A, B) => {
    if(A === 1) return 1;
    return (josephusProb(A-1, B) + B - 1) % A + 1;
}

const A = 5;
const B = 2;

console.log(josephusProb(A,B));

