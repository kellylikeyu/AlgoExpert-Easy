function isPalindrome(string) {
  // Write your code here.
	if(string.length ===1) {
		return true;
	} else {
		for (let i=0; i<= Math.floor((string.length-1)/2); i++) {
			if (string[i] !== string[string.length-1-i]) {
				return false;
			}
		}
	return true;
	}
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
