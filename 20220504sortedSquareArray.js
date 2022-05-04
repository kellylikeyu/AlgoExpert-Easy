function sortedSquaredArray(array) {
  // Write your code here.
	const result = [];
	for(let i=0; i<array.length; i++) {
		result.push(array[i]*array[i]);
	}
  return result.sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
