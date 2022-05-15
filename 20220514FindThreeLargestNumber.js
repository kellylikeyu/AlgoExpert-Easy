function findThreeLargestNumbers(array) {
  // Write your code here.
	let largest = [array[0], array[1], array[2]];
	let sortedLargest = largest.sort((a,b) => a-b);
	for(let i=3; i<array.length;i++) {
		if (array[i] > sortedLargest[0]) {
			sortedLargest[0] = array[i];
			sortedLargest = sortedLargest.sort((a,b) => a-b);
		}
	}return sortedLargest;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
