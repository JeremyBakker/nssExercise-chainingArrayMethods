// Instructions

// Using one single line of JavaScript code, complete the following tasks on the array of integers below.
	// Sort the numbers in descending order (10, 9, 8, 7, etc) 
		/*****sort method*****/
	// Remove any integers greater than 19 
		/*****filter method*****/
	// Multiply each remaining number by 1.5 and then subtract 1 
		/*****map method*****/
	// Then output (either in the DOM or the console) the sum of all the resulting numbers
		/*****reduce method*****/

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers = integers.sort(function(a, b){return a - b}).filter(function(val){return val < 19})
	.map(function(val){return (val * 1.5) - 1}).reduce(function(val, sum){return sum + val});

console.log(integers);