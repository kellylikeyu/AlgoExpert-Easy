function runLengthEncoding(string) {
  // Write your code here.
	let encoding = '';
	let count = 0;
	for (let i=0; i<string.length; i++) {
		if (string[i] === string[i+1]) {
			count ++;
		} else {
			count ++;
			encoding += count + string[i];
			count = 0;
		}
		if(count >8) {
			encoding += count + string[i];
			count = 0;
		}
	}return encoding;
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
