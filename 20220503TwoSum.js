function twoNumberSum(array, targetSum) {
  // Write your code here.
	const storage = {};
	let result = [];
	for (let i=0; i<array.length; i++) {
		if(storage[array[i]] !== targetSum-array[i]){
			storage[targetSum-array[i]] = array[i];
			console.log(storage);
		} else {
			
			return [targetSum-array[i], array[i]];
		}
	}
	return result
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
