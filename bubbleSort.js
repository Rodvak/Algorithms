

// Time Complexity
//   - Best: O(n) linear when array is already sorted.
//   - Average: O(n^2) quadratic.
//   - Worst: O(n^2) quadratic when the array is reverse sorted.
// Space: O(1) constant.
// For review, create a function that uses BubbleSort to sort an unsorted array in-place.
// For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
* Sorts the given nums in-place by mutating the array.
* Best: O(n) linear when array is already sorted.
* Average: O(n^2) quadratic.
* Worst: O(n^2) quadratic when the array is reverse sorted.
* @param {Array<number>} nums
* @returns {Array<number>} The given nums after being sorted.
*/

// Puuudoh code
// 1. 
// 2. for loop that goes through entire array
// 3.
// ok, I think I just sneak inside your room and seems to be going okay??
//I think we got it heidi, thank you though!
//  at least for now..

function bubbleSort(nums) {
for(let i = 0; i < nums.length; i++){
  for(let j = 0; j< nums.length - i - 1; j++) {
    if (nums[j] > nums[j+1]){
      let temp = nums[j]
      nums[j] = nums[j+1]
      nums[j+1] = temp
    }
  }
}
console.log(nums)
}

bubbleSort(numsOrdered);
bubbleSort(numsRandomOrder);
bubbleSort(numsReversed);
// good job! Looks like it's working!
//THANKS!!