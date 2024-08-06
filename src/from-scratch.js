// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
  //guard clause in case that the array is empty; or base case
  if (arr.length === 0) {
    return 0;
  }

  // recursive case - sum the first element and the sum of the rest of the array
  return arr[0] + sum(arr.slice(1));
};

// Refer to the recorded lecture and lab review from 7/29 in the Nirvana technical repo. We reviewed reverse and both fibonacci functions in those recordings.
// Reverse string using recursive approach
const reverse = (str) => {};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {};

// Recursive fibonacci
const fibRec = (n) => {};

// Watch this short video to help with binarySearch: https://www.youtube.com/watch?v=EFXWgZJZqL8&t=351s
// Return the index of target in arr, or -1 if not found using recursion
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
