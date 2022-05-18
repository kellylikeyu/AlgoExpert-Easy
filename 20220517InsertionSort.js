function insertionSort(array) {
  // Write your code here.
	for (let i=1; i<array.length; i++) {
		if (array[i-1] > array[i]) {
			let move = array[i];
			let j = i - 1;
			
			while (array[i] < array[i - 1] && i >= 1) {
				let temp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = temp;
				i--;
			}		
		}
	} return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
