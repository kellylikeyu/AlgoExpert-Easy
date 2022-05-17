function generateDocument(characters, document) {
  // Write your code here.
	let storage = {};
	for(let i= 0; i<characters.length; i++) {
		if (!storage[characters[i]]) {
			storage[characters[i]] = 1;
		} else {
			storage[characters[i]] ++;
		}
	}
	for(let j=0; j<document.length; j++) {
		if (!storage[document[j]] || storage[document[j]] <=0) {
			return false;
		} else {
			storage[document[j]] --;
		}
	}
  return true;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
