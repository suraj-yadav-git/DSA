/*
A wire connects N light bulbs.
Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.
Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.
You can press the same switch multiple times.
Note: 0 represents the bulb is off and 1 represents the bulb is on.

input:
A = [0, 1, 0, 1]

output:
4

TC: O(N)

SC: O(1)
*/

const setAllBulbOn = (A) => {
    let cnt = 0;
    for(let i=A.length-1; i>=0; i--) {
        if(i === 0) {
            if(A[i] === 0) cnt++;
            return cnt;
        }
        if(A[i] !== A[i-1]) {
            cnt++
        }
    }
}

A = [0, 1, 0, 1];
console.log(setAllBulbOn(A));
