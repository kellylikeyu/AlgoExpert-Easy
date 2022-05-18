function bubbleSort(array) {
  // Write your code here.
	let swapping = true;
		while (swapping) {
			swapping = false;
			for (let i=0; i<array.length; i++) {
				if (array[i] > array[i+1]) {
					let temp = array[i];
					array[i] = array[i+1];
					array[i+1] = temp;
					swapping = true;
				}
			}
		}
		return array;
	}


// Do not edit the line below.
exports.bubbleSort = bubbleSort;
