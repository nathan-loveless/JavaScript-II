// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Get Length
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
	cb(arr.length);
}

getLength(items, (item) => { console.log(item) });

// Get last item
function getLast(arr, cb) {
  // last passes the last item of the array into the callback.
	cb(arr[arr.length - 1]);
}

getLast(items, (item) => { console.log(item) });

// Sums 2 numbers
function sumNums(x, y, cb) {
  sum = x + y;
  cb(sum);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(5, 4, (sumNum) => { console.log(sumNum); });

// Multiplies 2 numbers
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  mult = x * y;
  cb(mult);
}

multiplyNums(5, 4, (multiNum) => { console.log(multiNum); });

// Is an item present in the array?
 function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
    let found = false;
    list.forEach(element => { if(element === item) { found = true; }});

     cb(found);
 }

contains('Notebook', items, (value) => { console.log(value); });

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
