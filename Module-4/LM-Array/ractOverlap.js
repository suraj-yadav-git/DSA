/*
Rectangle that is represented as a list [x1, y1, x2, y2], 
where (x1, y1) is the coordinates of its top-left corner, 
and (x2, y2) is the coordinates of its bottam-right corner. 
Now two rectangles overlap if the area of their intersection is positive.
Two rectangles that only touch at the corner or edges do not overlap.
Check in O(1) Time complexity and O(1) Space complexity that both rectangle overlap or not
*/

const checkRactOverlap = (s,e,s1,e1) => {
    if(s[0] >= e1[0] || e[0] <= s1[0]) return false;
    if(s[1] <= e1[1] || e[1] >= s1[1]) return false;
    return true;
}
console.log(checkRactOverlap([0,10],[10,0],[5,5],[15,0])); // true
console.log(checkRactOverlap([0,10],[10,0],[10,5],[15,0])); // false
console.log(checkRactOverlap([0,10],[10,0],[11,5],[15,0])); // false