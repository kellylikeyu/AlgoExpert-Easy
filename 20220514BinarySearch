function binarySearch(array, target) {
  // Write your code here.
	let left = 0;
	let right = array.length;
	
	while(right > left) {
		let midInd = Math.floor((left + right)/2);
		let midNum = array[midInd];

	
	if (midNum === target) {
		return midInd;
	} else if (midNum < target) {
		 left = midInd + 1;
	} else {
		right = midInd;
	}
	}
	return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
