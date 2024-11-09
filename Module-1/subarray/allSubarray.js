/*
You are given an array A of N integers.
Return a 2D array consisting of all the subarrays of the array
Note : The order of the subarrays in the resulting 2D array does not matter.

input:
A = [5, 2, 1, 4]

output:
[[1 ], [1 4 ], [2 ], [2 1 ], [2 1 4 ], [4 ], [5 ], [5 2 ], [5 2 1 ], [5 2 1 4 ] ]

TC:O()

SC:O()
*/

const allSubarray = (A) => {
    const totalSubArray = [];
    for(let i=0; i<A.length; i++) {
        const subarray = [];
        for(let j=i; j<A.length; j++) {
            //in js array are worked with reference by address hence we need another variable to not impact previous value of totalSubArray here, may not be needed in other languages
            const minSub = [...subarray,A[j]]; 
            subarray.push(A[j]);       
            totalSubArray.push(minSub);
        }
    }
    return totalSubArray;
}

const A = [5, 2, 1, 4];

console.log(allSubarray(A));