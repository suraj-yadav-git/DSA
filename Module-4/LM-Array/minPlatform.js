/*
List of arrival and departure time is given, 
Find the minimum number of platforms are required for the railway as no train waits
*/

const minPlatform = (arr, dep) => {
    dep.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    let currentPlatforms = 0;
    let maxPlatforms = 0;
    let i = 0;
    let j = 0;

    while(i< arr.length && j < dep.length) {
        if(arr[i] < dep[j]) {
            currentPlatforms++;
            maxPlatforms = Math.max(maxPlatforms, currentPlatforms);
            i++;
        } else {
            currentPlatforms--;
            j++;
        }
    }
    return maxPlatforms;
}

console.log(minPlatform([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000])); // 3
console.log(minPlatform([900, 940, 950, 1100, 1500, 1800], [920, 1200, 1120, 1130, 1900, 2000])); // 4  
console.log(minPlatform([900, 940, 950, 1100, 1500, 1800], [930, 1200, 1120, 1130, 1900, 2000])); // 4

