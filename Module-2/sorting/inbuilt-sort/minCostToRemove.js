/*
Given an integer array A of size N. You can remove any element from the array in one operation.
The cost of this operation is the sum of all elements in the array present before this operation.
Find the minimum cost to remove all elements from the array.

input:
[2,1,4]

output:
11

TC: O(NlogN)

SC: O(1)
*/

const minCostToRemove = (A) => {
    let cost = 0;
    A.sort((a, b) => {
        return b - a;
    })
    for(let i=0; i<A.length; i++) {
        cost += A[i]*(i+1);
    }
    return cost;
}

const A = [2,1,4];
console.log(minCostToRemove(A));