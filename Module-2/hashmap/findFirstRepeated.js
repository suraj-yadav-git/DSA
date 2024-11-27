/*
Given an integer array A of size N, find the first repeating element in it.
We need to find the element that occurs more than once and whose index of the first occurrence is the smallest.
If there is no repeating element, return -1.

input:
A = [10, 5, 3, 4, 3, 5, 6]

output:
5

TC: O(N)

SC: O(N)
*/

const firstRepeated = (A) => {
    let hashObj = {}
    for(let val of A) {
        if(hashObj[val]) {
            hashObj[val]++;
        } else {
            hashObj[val] = 1;
        }
    }
    for(let ele of A) {
        if(hashObj[ele] > 1) return ele;
    }
    return -1;
}

const A = [10, 5, 3, 4, 3, 5, 6];
console.log(firstRepeated(A));