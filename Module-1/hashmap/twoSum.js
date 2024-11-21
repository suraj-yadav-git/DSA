/*
Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). 
Check if any good pair exist or not.

input :
A = [1,2,3,4]
B = 7

output :
1

TC : O(N)

SC : O(N)
*/

const goodPair = (A, B) => {
    const seen = new Map();

    for(let i=0; i<A.length; i++) {
        const complement = B - A[i];
        if( seen.has(complement)){
            return 1;
    }
    seen.set(A[i], true);
}
return 0;
}


const A = [1,2,3,4,10];
const B = 19;

console.log(goodPair(A, B));