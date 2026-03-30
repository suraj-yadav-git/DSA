/*
You have an array of non-negative integers,
you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index in O(n) Time complexity and O(1)
*/

const minJump = (arr) => {
    if(arr.length == 1) return 0;
    let a = arr[0];
    let b = arr[0];
    let jump = 1;
    for(let i=1; i<arr.length; i++) {
        if(i == arr.length - 1) return jump;
        a--;
        b--;

        if(b < arr[i]) {
            b = arr[i];
        }
        if(a == 0) {
            if(b == 0) return -1;
            jump++
            a = b;
        }
    }
    return jump;
}

console.log(minJump([2,3,1,1,4])) // 2
console.log(minJump([2,3,0,1,4])) // 2
console.log(minJump([0])) // 0
console.log(minJump([1,2,3])) // 2
console.log(minJump([2,1])) // 1
console.log(minJump([1,1,1,1])) // 3
console.log(minJump([3,2,1,0,4])) // -1
console.log(minJump([2,0,2,0,1])) // 2
console.log(minJump([3,2,1,0])) // 1