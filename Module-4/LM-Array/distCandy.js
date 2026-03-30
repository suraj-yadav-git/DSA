/*
There are N children standing in a line with some rating value. 
You want to distribute a minimum number of candies to these children such that:
Each child must have at least one candy.
The children with higher ratings will have more candies than their neighbors.
You need to write a program to calculate the minimum candies you must give.
*/

const distCandy = (ratings) => {
    const left = [];
    const right = [];
    
    for(let i=0; i<ratings.length; i++) {
        if(ratings[i] > ratings[i-1]) {
            left[i] = left[i-1] + 1;
        } else {
            left[i] = 1;
        }
    }

    for(let i=ratings.length-1; i>=0; i--) {
        if(ratings[i] > ratings[i+1]) {
            right[i] = right[i+1] + 1;
        } else {
            right[i] = 1;
        }
    }

    let totalCandies = 0;
    for(let i=0; i<ratings.length; i++) {
        totalCandies += Math.max(left[i], right[i]);
    }

    return totalCandies;
}

// console.log(distCandy([1, 0, 2])); // 5
// console.log(distCandy([1, 2, 2])); // 4
console.log(distCandy([1, 3, 4, 5, 2])); // 11
// console.log(distCandy([1, 2, 87, 87, 87, 2, 1])); // 13