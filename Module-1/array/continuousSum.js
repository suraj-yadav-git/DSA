/*
There are A beggars sitting in a row outside a temple. Each beggar initially has an empty pot. When the devotees come to the temple, they donate some amount of coins to these beggars. Each devotee gives a fixed amount of coin(according to their faith and ability) to some K beggars sitting next to each other.

Given the amount P donated by each devotee to the beggars ranging from L to R index, where 1 <= L <= R <= A, find out the final amount of money in each beggar's pot at the end of the day, provided they don't fill their pots by any other means.
For ith devotee B[i][0] = L, B[i][1] = R, B[i][2] = P, given by the 2D array B

Input:
A = 5
B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]

Output:
10 55 45 25 25

TC:

SC:
*/

const contiSum = (A, B) => {
    const M = Array(A).fill(0);
    for(let val of B) {
        M[val[0]-1] += val[2];
        if(val[1] < A) M[val[1]] += -val[2];
    }
    for(let i=1; i<M.length; i++) {
        M[i] += M[i-1];
    }
    return M;
}

const A = 5
const B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]

console.log(contiSum(A, B)) //10 55 45 25 25