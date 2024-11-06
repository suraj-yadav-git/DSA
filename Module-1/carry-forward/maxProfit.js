/*
Say you have an array, A, for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Return the maximum possible profit.

input:
A = [1, 4, 5, 2, 4]

output:
4

TC:O(N)

SC:O(1)
*/

const maxProfit = (A) => {
    let max = A[0];
    let min = A[0];
    let profit = 0;
    for(let i=1; i<A.length; i++) {
        if(A[i] > max) {
            max = A[i];
            profit = (A[i] - min) > profit ? (A[i] - min) : profit;
        } else if(A[i] < min) {
            min = A[i];
            max = A[i];
        }
    }
    return profit;
}

const A = [1, 4, 5, 2, 4];
console.log(maxProfit(A));