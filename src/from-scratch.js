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



// Reverse string using recursive approach
const reverse = (str) => {
    //base case, if string is empty or has one character
    if (str.length <= 1) {
        return str;
    }

    //by using slice on string and passing it into reverse, you're passing in the 
    //rest of the word except for the beginning letter and then attaching the beginning letter to the end of that sliced section of the string.
    //str[0] changes to the next letter or character in the string as you iterate down it, because its sliced part is being fed back into reverse()
    // reverse("ello") + "h"
    // reverse("llo") + "e" + "h"
    // reverse("lo") + "l" + "e" + "h"
    //etc.

    return reverse(str.slice(1)) + str[0]

};

console.log(reverse('hi hi bye bye'))


// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    //make sure to have the base case/guard clause regardless, if n = 0 or 1
    if (n <= 1) {
        return n
    }

    //empty variable to hold the total fibonacci number
    let fib = 0
    //getting the number we are currently iterating on
    let curr = 0
    //getting the next number after the current number
    let next = 1

    for (let i = 0; i < n; i++) {
        //add together the current numbers 
        fib = curr + next
        //update a and b to move along the digits of n
        //curr moves on to the next digit
        curr = next
        //next becomes the fibonacci number you currently have 
        next = fib


        // fib = a + b
        // console.log({ i })
        // console.log({ curr }, { next })
        // console.log({ fib })

    }

    //you return current instead of the fibonacci variable or next to return the number at the fibonacci POSITION 10.
    return curr
};

console.log(`fibiter: ${fibIter(10)}`)


//i don't know what requiring a helper function means 

// Recursive fibonacci
const fibRec = (n) => {
    //base cases according to test cases, making sure that n is returned if n is 1 or 0.
    if (n <= 1) {
        return n
    }


    //using the fib formula to find the fib number at the given position n
    return fibIter(n - 1) + fibIter(n - 2)
};

console.log(`fibrec: ${fibRec(10)}`)


//idk how or why this is exceeding the call stack, I have a feeling it has something to do with the recursive statements. I'm not sure what. would love feedback. 

// Return the index of target in arr, or -1 if not found using recursion 
//the goal here is to cut the array down into smaller and smaller pieces until we find the target we are looking for.
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    //calculate the middle index using a math function
    const middle = Math.floor((start + end) / 2)

    //base case, meaning that the array has been fully minimized and we still haven't found the target.
    if (start > end || start > middle) {
        return -1
    }

    //using the middle index number we caluclated, compare the element of the middle index in the given array to the value of the given target.
    if (arr[middle] === target) {
        //if the target matches the element at the middle index of the array, return the middle index (where the target is located at!)
        return middle;
    }

    if (arr[middle] > target) {
        //if the number at the middle index of the array is larger than the target, shrink the middle index down a value so it goes down towards the earlier, lesser numbers to find the SMALL target.
        //notice how you don't need the end element? You don't need the end element anymore since you aren't searching the right half of the array anymore (where the bigger numbers are held.) The middle index becomes the new end index as you search the left side of the array. 
        return binarySearch(arr, target, start, middle - 1);
    } else {
        //still returning the array, the target, and the start since they haven't changed in both circumstances. Since in this case, the target number is more than the number at the middle index of the array, we search the right half of the array.
        //which means, we need to return the end of the array if we ever want to indicate an end of the search to the base case of this recursive loop. 
        return binarySearch(arr, target, start, middle + 1, end)
    }


};



module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
