function productSum(array) {
  // Write your code here.
	let sum = 0
	productSumHelper(array,1);
	
	function productSumHelper(array,depth) {
	for (let arrayInd = 0; arrayInd < array.length; arrayInd++) {
		if (Array.isArray(array[arrayInd])) {
			// depth++;
			productSumHelper(array[arrayInd], depth+1);
			 console.log("array", sum, depth, array[arrayInd] * depth);
		} else {
			console.log("add once", sum, depth, array[arrayInd] * depth);
			let depthProduct = calculateDepth(depth);
			sum += array[arrayInd] * depthProduct;
			// console.log('isnumber'+ array[arrayInd],depth);
		}
	}
}
	function calculateDepth(n) {
		let i=1;
		let product = 1;
		while(i<=n) {
			product *= i;
			i++
		} return product;
	}
	return sum;
}


// Do not edit the line below.
exports.productSum = productSum;
