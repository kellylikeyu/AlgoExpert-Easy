function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
	let max = 0; 
	let min = 0;
	let sortedRed = redShirtSpeeds.sort((a,b) => b-a);
	let sortedBlue = blueShirtSpeeds.sort((a,b) => b-a);
	let redCount = redShirtSpeeds.length;
	let blueCount = blueShirtSpeeds.length;
	let total = redShirtSpeeds.concat(blueShirtSpeeds).sort((a,b) => b-a);
	for (let i = 0; i < total.length/2; i++) {
		if (sortedRed.includes(total[i])) {
			max += total[i];
			redCount --;
		}  else if (sortedBlue.includes(total[i])) {
			max += total[i];
			blueCount --;
			}
	}
	
	for (let j = 0; j< redShirtSpeeds.length; j++) {
		min += Math.max(sortedRed[j], sortedBlue[j])
	}
  if (fastest) {
		return max;
	} else {return min;
		 }
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
