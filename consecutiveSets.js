// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16; 
/*
expected1 = [
  [2, 5, 3, 6],    
  [3, 6, 7], // 3+6+7 =16
];
*/

const nums2 = [];
const sum2 = 5;
// expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
// expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
/* expected4 = [
  [2, 5, 3, 6], // 2+5+3+6 = 16
  [3, 6, 7], // 3+6+7 = 16
  [3, 6, 7, 0], // 3+6+7+0 = 16
  [3, 6, 7, 0, 0], // 3+6+7+0+0 = 16
]; */

// Bonus:
// const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
// const sum5 = -16;
/* expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
]; */

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * param {Array<number>} nums Unordered nums.
 * param {number} targetSum
 * returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function sumArray(arr){
    let total = 0;
    for(let i in arr) { 
        total += arr[i];
    }
    return total;
}


function findConsqSums(nums, targetSum) {
    let currSet = []
    const returnedArr = []
    if(!nums) return returnedArr;
    for(let i = 0; i < nums.length; i++) {
      currSet = []
      for(let j=i; j<nums.length; j++){
        currSet.push(nums[j])
        if(sumArray(currSet) === targetSum) {
          returnedArr.push(currSet)
          currSet = []
        }    
      }
    }
    return returnedArr
  }

console.log(findConsqSums(nums1, sum1))

// Pseudocode

// 1. Take an array and iterate through it
// 2. If the array passed in is empty, then return an empty array
// 3. Create an empty array to push the consecutive values that add up to the target sum
//    - Create another empty array to add the current set of numbers that add into the target sum
// 5. Once a set is found, push the currSet array to the returnedArray, then empty the currSet array
//    - 
// 6. Restart the loop at the next index
// 7. 



   
/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

// const nums5 = [1, 2, 3, 4, 6, 7, 8, 10];
//        idx: 0, 1, 2, 3, 4, 5, 6, 7
/* expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
]; */

const nums6 = [];
// expected2 = [];

const nums7 = [1, 3, 7, 9];
/* expected3 = [
  { i: 1, n: 3 },
  { i: 2, n: 7 },
  { i: 3, n: 9 },
]; */
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * param {Array<number>} sortedNums
 * typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * property {number} i The index of the non consecutive number.
 * property {number} n The non consecutive number itself.
 * returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {}