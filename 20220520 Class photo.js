function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	redShirtHeights = redShirtHeights.sort((a,b) => a - b);
	blueShirtHeights = blueShirtHeights.sort((a,b) => a - b);
	
	let length = redShirtHeights.length;
	if (length == 1 && redShirtHeights[0] != blueShirtHeights[0]) {return true;}
	if (redShirtHeights[length-1] == blueShirtHeights[length-1]) {return false;}
	if (redShirtHeights[length-1] > blueShirtHeights[length -1]) {
		for (let i = 0; i < length - 1; i++) {
			if (redShirtHeights[i] <= blueShirtHeights[i]) {	
				return false;
			}
		}
	}
	if (redShirtHeights[length-1] < blueShirtHeights[length -1]) {
		for (let i = 0; i < length - 1; i++) {
			if (redShirtHeights[i] >= blueShirtHeights[i]) {
				return false;
			}
		}
	}
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
