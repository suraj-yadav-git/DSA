/*
Given a sorted array, remove the duplicates in place such that each element appear only once 
and return the new length. Do not allocate extra space for another array, 
Time complexity O(n) and Space complexity O(1)
*/

const removeDuplicate = (arr) => {
    if(arr.length === 0 || arr.length === 1) return arr.length;

    let j = 0;
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] !== arr[i+1]) {
            arr[j++] = arr[i];
        }
    }
    arr[j++] = arr[arr.length - 1];
    return j;
}

const arr = [1,1,2,2,3,4,4,5];
const newLength = removeDuplicate(arr);
console.log(newLength); // 5
console.log(arr.slice(0, newLength)); // [1, 2, 3, 4, 5]