/*
Array consist of only 0's, 1's and 2's. Write an algorithm to sort  
this array in O(n) time complexity and O(1) Space complexity with only one traversal
*/

const segregation = (arr) => {
    let low = mid = 0;
    let high = arr.length - 1;
    while(mid <= high) {
        if(arr[mid] === 1) {
            mid++;
        } else if(arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        } else {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }
    }
    return arr;
}

const arr = [2, 1, 0, 2, 0, 0, 1, 2, 1, 1, 0, 2, 0, 1];
const sortedArr = segregation(arr);
console.log(sortedArr); // [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2]