const mergeSort = (arr, low=0, high=arr.length-1) => {
    if(low >= high) return;

    const mid = Math.floor((low+high)/2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

const merge = (arr, low, mid, high) => {
    let i=low, j=mid+1, k=low;
    const result = [];

    while(i<=mid && j<=high) {
        if(arr[i] <= arr[j]) {
            result[k++] = arr[i++];
        } else {
            result[k++] = arr[j++];
        }
    }
    while(i<=mid) {
        result[k++] = arr[i++];
    }
    while(j<=high) {
        result[k++] = arr[j++];
    }
    for(let i=low; i<=high; i++){
        arr[i] = result[i];
    }
}

const arr = [5, 2, 9, 1, 5, 6];
mergeSort(arr);
console.log(arr); // [1, 2, 5, 5, 6, 9]
