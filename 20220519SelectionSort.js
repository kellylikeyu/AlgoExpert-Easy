function selectionSort(array) {
  // Write your code here.
	for (let i=0; i<array.length; i++) {
		let subArray = array.slice(i+1);
		let smallInd = findSmallest(subArray) + i + 1;
		if (array[i] > array[smallInd]) {
			let temp = array[i];
			array[i] = array[smallInd];
			array[smallInd] = temp;
		}
	} return array;
}

function findSmallest(array) {
	let smallest = Infinity;
	let smallestInd;
	for (let i=0; i<array.length; i++) {
		if (array[i] < smallest) {
			smallest = array[i];
			smallestInd = i;
		}
	}
	return smallestInd;
}
// Do not edit the line below.
exports.selectionSort = selectionSort;
