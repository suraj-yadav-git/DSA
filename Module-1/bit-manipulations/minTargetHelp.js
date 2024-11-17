/*
Alex and Sam are good friends. Alex is doing a lot of programming these days. He has set a target score of A for himself.
Initially, Alex's score was zero. Alex can double his score by doing a question, or Alex can seek help from Sam for doing questions that will contribute 1 to Alex's score. Alex wants his score to be precisely A. Also, he does not want to take much help from Sam.

Find and return the minimum number of times Alex needs to take help from Sam to achieve a score of A.

input:
5

output:
2

Hint : count the number of set bits

TC: O(logN)

SC: O(1)
*/

// soln without bit manupulations
// const minHelpRequired = (A) => {
//     let ans = 0;
//     let score = 0;
//     while(score < A) {
//         if(score === 0 || score*2 > A) {
//             score += 1;
//             ans++;
//         } else {
//             score *= 2;
//         }
//     }
//     return ans;
// }

// soln with bit manupulation
const minHelpRequired = (A) => {
    let ans = 0;
    while(A > 0) {
        if((A&1) === 1) ans++
        A = A >> 1
    }
    return ans;
}

const A = 7;
console.log(minHelpRequired(A));


