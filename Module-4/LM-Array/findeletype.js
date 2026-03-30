/*
We have an array, we have to find an element before which all elements are less than it, 
and after which all are greater than it. Finally, return the index of the element, 
if there is no such element, then return -1: Time complexity O(n) and Space Complexity O(n)
*/

const findElement = (arr) => {
    const left = [];
    leftMax = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > leftMax) {
            leftMax = arr[i]
        }
        left[i] = leftMax;
    }
    rightMin = Number.MAX_SAFE_INTEGER;
    for(let i=arr.length-1; i>0; i--) {
        if(arr[i] > left[i-1] && arr[i] < rightMin) {
            return i
        }
        if(arr[i] < rightMin) {
            rightMin = arr[i]
        }
    }
    return -1;
}

// console.log(findElement([5,1,4,3,6,8,10,7,9])); // 4
// console.log(findElement([5,1,4,4])); // -1
console.log(findElement([1,2,3,4,5])); // 4