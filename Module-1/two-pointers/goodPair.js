/*
Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). 
Check if any good pair exist or not.

input :
A = [1,2,3,4]
B = 7

output :
1

TC : O(N^2)

SC : O(1)
*/

const goodPair = (A, B) => {
    for(let i=0; i<A.length; i++) {
        for(let j=i+1; j<A.length; j++) {
            if(A[i] + A[j] === B) return 1;
        }
    }
}

const A = [1,2,3,4];
const B = 7;

console.log(goodPair(A, B));