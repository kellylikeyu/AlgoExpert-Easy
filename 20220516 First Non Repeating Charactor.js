function firstNonRepeatingCharacter(string) {
  // Write your code here.
	let storage = {};
	for(let i=0; i<string.length; i++) {
		if(!storage[string[i]]) {
			storage[string[i]] = 1;
		}
		else {
			storage[string[i]] += 1;
		}
	}
		for (let j=0; j<string.length; j++) {
			if(storage[string[j]] === 1) {
				return j;
			}
		} return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
