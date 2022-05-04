function isValidSubsequence(array, sequence) {
  // Write your code here.
	let seqPointer = 0;
	for (let i=0; i<array.length; i++) {
		if (array[i] === sequence[seqPointer]) {
			seqPointer ++;
		}
	}
	return sequence.length === seqPointer; 
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
