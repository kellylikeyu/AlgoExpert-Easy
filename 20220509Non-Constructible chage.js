function nonConstructibleChange(coins) {
  // Write your code here.
	// if(coins.length ===0) {
	// 	return 1;
	// }
	let sortedCoins = coins.sort((a,b) => a-b);
	let sum = 0;
	for(let i=0; i<coins.length; i++) {
		if(sortedCoins[i] - sum > 1) {
			return sum+1;
		}
		sum += sortedCoins[i];
	} return sum+1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
