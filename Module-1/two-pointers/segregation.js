/*
You are given an array of 0s and 1s in random order. 
Segregate 0s on left side and 1s on right side of the array [Basically you have to sort the array]. T
Note : raverse array only once. 

input:
[0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 

output:
[0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 

TC: O(N)

SC: O(1)
*/

const segregateArr = (A) => {
    let p1 = 0;
    let p2 = 1;

    while(p2 < A.length && p1 < A.length) {
        if(A[p2] === 0) {
            [A[p1],A[p2]] = [A[p2],A[p1]];
            p1++;
            if(p1 === p2) p2++;
        } else {
            p2++;
        }
    }
    return A;
}

const A = [0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
console.log(segregateArr(A));