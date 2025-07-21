/*
We rotate an ascending order sorted array at some point unknown to user. So for instance, 
3 4 5 6 7 might become 5 6 7 3 4. Modify binary search algorithm to find an element in the rotated array 
in O(log n) time and O(1) Space complexity
*/

const findInRotatedArray = (arr, target, start, end) => {
    if(start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if(arr[mid] === target) {
        return mid;
    }

    if(arr[mid] >= arr[start]) {
        if(arr[start] <= target && target < arr[mid]) {
            return findInRotatedArray(arr, target, start, mid - 1);
        } else {
            return findInRotatedArray(arr, target, mid + 1, end);
        }
    }
    if(arr[end] >= target && target > arr[mid]) {
        return findInRotatedArray(arr, target, mid + 1, end);
    }
    return findInRotatedArray(arr, target, start, mid - 1);
}

const arr = [5, 6, 7, 8, 9, 1, 2, 3];
const target = 6;
const index = findInRotatedArray(arr, target, 0, arr.length - 1);
console.log(index); // 1