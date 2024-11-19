/*
You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. 
If 2 elements have same number of factors, then number with less value should come first.
Note: You cannot use any extra space

input:
A = [6, 8, 9]

output:
[9, 6, 8]

TC: O(NlogN * logN)

SC: O(1)
*/

const sortBasedOnFactor = (A) => {
    A.sort((a,b) => {
        let cntF = cntFactors(a) - cntFactors(b);
        if(cntF == 0) {
            return a-b;
        } else {
            return cntF;
        }  
    })
    return A;
}

const cntFactors = (B) => {
    let cnt = 0;
    let i=1;
    while(i*i < B) {
        if(B % i === 0) cnt+=2;
        i++;
    }
    if(i*i === B) cnt++;
    return cnt;
}

const A = [6, 8, 9];
console.log(sortBasedOnFactor(A));