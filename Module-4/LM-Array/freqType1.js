/*
Array of length n having integers 1 to n with some elements being repeated. 
Count frequencies of all elements from 1 to n in Time Complexity O(n) 
and Space Complexity O(1) Asked in :
*/

const freqType = (arr) => {
    const n = arr.length;
    for(let i=0; i<n; i++) {
        arr[i]--;
    }

    for(let i=0; i<n; i++) {
        arr[arr[i] % n] = n + arr[arr[i] % n];
    }

    for(let i=0; i<n; i++) {
        console.log(`${i + 1} -> ${Math.floor(arr[i] / n)}`);
    }
}

const arr = [2, 3, 3, 2, 5];
freqType(arr);