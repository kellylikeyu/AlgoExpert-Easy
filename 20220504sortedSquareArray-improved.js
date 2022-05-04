function sortedSquaredArray(array) {
  // Write your code here.
	const sortedSquare = [];
	let resultInd = array.length-1;
	let leftPointer = 0;
	let rightPointer = array.length-1;
	while (leftPointer<=rightPointer) {
		if (Math.abs(array[leftPointer]) < Math.abs(array[rightPointer])) {
			sortedSquare[resultInd] = array[rightPointer] * array[rightPointer];
			rightPointer --;
			resultInd --;
		} else {
			sortedSquare[resultInd] = array[leftPointer] * array[leftPointer];
		  leftPointer ++;
			resultInd --;
		}
	}
  return sortedSquare;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
