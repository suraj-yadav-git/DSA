/*
One array of integers is given as an input, which is initially increasing and then decreasing 
or it can be only increasing or decreasing , you need to find the maximum value in the array in O(Log n) 
Time complexity and O(1) Space Complexity
*/

const findMax = (arr, start, end) => {
    if(start === end) {
        return arr[start];
    }

    if(end = start + 1) {
        return Math.max(arr[start], arr[end]);
    }

    const mid = Math.floor((start + end)/ 2);

    if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return arr[mid];
    } else if(arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
        return findMax(arr, mid + 1, end);
    } else {
        return findMax(arr, start, mid -1);
    }
}

const arr = [1, 3, 8, 12, 4, 2];
const max = findMax(arr, 0, arr.length - 1);
console.log(max); // 12