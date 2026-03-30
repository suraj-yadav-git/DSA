function sortSubarrayInPlace(arr, startIndex, endIndex, compareFunction) {
  // Extract the subarray
  const subarray = arr.splice(startIndex, endIndex - startIndex + 1);

  // Sort the extracted subarray
  subarray.sort(compareFunction); // Use a custom compareFunction for numerical or complex sorting

  // Insert the sorted subarray back into the original array
  arr.splice(startIndex, 0, ...subarray);
}

const nextNumber = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {  
        return null;
    }
    let element;
    let i,j;
    for(i= arr.length - 1; i >= 0; i--) {
        if (arr[i-1] < arr[i]) {
            element = arr[i-1];
            break;
        } 
    }
    if (element === undefined) {
        return null;
    }
    const infinity = Number.MAX_SAFE_INTEGER;
    let minGreater = infinity;
    let minId = -1;
    for(j=i; j < arr.length; j++) {
        if (arr[j] > element && arr[j] < minGreater) {
            minGreater = arr[j];
            minId = j;
        }
    }
    if (minGreater === infinity) {
        return null;
    }
    [arr[i-1], arr[minId]] = [arr[minId], arr[i-1]];
    sortSubarrayInPlace(arr,i,arr.length-1,(a,b) => a-b);
    return arr;
}

console.log(nextNumber([2,5,6,3,7,5,4,2])); // [2,5,6,4,2,3,5,7]
