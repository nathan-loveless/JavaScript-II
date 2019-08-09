// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Simple Closure
let simpleArray ['This', 'is' 'outside', 'lexical', 'scope'];
function doThis()
{
	// no simpleArray declared inside lexical/private scope, it will look outward.
	console.log(simpleArray);
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
	let count = 0;
	return function () { return ++count; }
};
// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (start) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = start;

  return  {
    increment: function () { return ++count; },
    decrement: function () { return --count; }
  }
};

let newFactory = counterFactory(10);
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());

console.log(newFactory.decrement());
console.log(newFactory.decrement());
